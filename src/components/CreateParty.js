import React, { Component } from 'react';
import axios from 'axios';
import CreatePartyAddingGuests from './CreatePartyAddingGuests';
import firebase from 'firebase';
import close from '../assets/close.svg';
import party from '../assets/party.jpg';




class CreateParty extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      partyName: "",
      partyAddress: "",
      partyDetails: "",
      guestsKeys: [],
      addedGuests: [],
      dietList: [],
      intoleranceList: [],
      error:false,
      showGuestList: false,
      photoURL: party
    };
  }

  componentDidMount() {}

  getRecipes = (e) => { //Axios call to get our recipes based on params from the state (diets, intolerances)
    e.preventDefault();
    // Spoonacular API call
    const url = "https://api.spoonacular.com/recipes/search";
    const key = "ac3ee15e730b4a6c9dbc8bfa56524854";

    const intoleranceAxios = this.state.intoleranceList.join(); //Turning our array into string so we can use 1 API call for all the intolerances
    const dietAxios = this.state.dietList.join(); // Same as above but for diets

    this.setState({
      recipes:[]
    })

    this.setState({ //Resets the error handling state so that if the user changed something the message would disapear
      error:false
    })

    axios({
      method: "GET",
      url: url,
      params: {
        apiKey: key,
        query: "dinner",
        format: "json",
        intolerances: intoleranceAxios, 
        diet: dietAxios,
      },
    })
      .then((res) => {
        const foodData = res.data.results
        foodData.length === 0 //If no results found, set error message 
        ? this.setState({
          error:true
        })
        : this.setState({
          recipes: res.data.results, //If results return, save to state
        });
      })
      .catch((error) => {
        alert(error); //Alert if API explodes
      });
  };

  updateState = (event) => { //Used to dynamically update state based on inputs and input ID (i.e. input ID is what the state name is and the input val will save as the state val)
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  getUserKey = (key) => { //Get user key in reference to the firebase database keys- This will add the current keys and any other keys when the user adds a guest to their party so we can populate the data
    const guestsKeys = this.state.guestsKeys;
    if (guestsKeys.includes(key) === false) guestsKeys.push(key); //This makes it so you cannot add the same person more than once
    this.setState(
      {
        guestsKeys,
      },
      () => {
        this.convertKeys();//Convert the keys into profile objects 
        this.createIntolerancesList(); //Create intol list from profile objects
        this.createDietList(); // Crate diet list from profile objects
      }
    );
  };

  createDietList = () => { 
    const dietList = [];
    for (let i = 0; i < this.state.guestsKeys.length; i++) { //Go through the saved keys of the guests that are going to the party --> push all their diets into a new array so we can save to state. Used to get multiple guests diets into one
      firebase
        .database()
        .ref("/Guests/" + this.state.guestsKeys[i])
        .on("value", (response) => {
          const diet = response.val().diet;
          if (dietList.includes(diet) === false && diet !== undefined) //no duplicates
            dietList.push(diet);
        });
    }
    this.setState({ // Save to state the new array
      dietList,
    });
  };

  createIntolerancesList = () => {
    const intoleranceList = [];
    for (let i = 0; i < this.state.guestsKeys.length; i++) { //same as above but for getting intolerances
      firebase
        .database()
        .ref("/Guests/" + this.state.guestsKeys[i])
        .on("value", (response) => {
          const intolerance = response.val().allergies;
          for (let i = 0; i < intolerance.length; i++) {
            if (
              intoleranceList.includes(intolerance[i]) === false && // no dupes
              intolerance[i] !== undefined
            )
              intoleranceList.push(intolerance[i]);
          }
        });
    }
    this.setState({
      intoleranceList,
    });
  };

  convertKeys = () => {
    const addedGuests = [];
    for (let i = 0; i < this.state.guestsKeys.length; i++) { //convert saved keys into profiles
      firebase
        .database()
        .ref("/Guests/" + this.state.guestsKeys[i])
        .on("value", (response) => {
          const profile = response.val();
          profile.key=this.state.guestsKeys[i]
          addedGuests.push(profile);
        });
    }
    this.setState({
      addedGuests,
    });
  };

  submitParty = (e) => { //saving all our states and throwing it into firebase as an object
    e.preventDefault();
    if (
      this.state.partyName &&
      this.state.partyAddress &&
      this.state.partyDetails !== ""
    ) {
      const party = {};
      party.partyName = this.state.partyName;
      party.partyAddress = this.state.partyAddress;
      party.partyDetails = this.state.partyDetails;
      party.intoleranceList = this.state.intoleranceList;
      party.dietList = this.state.dietList;
      party.addedGuests = this.state.addedGuests;
      party.photoURL = this.state.photoURL;
      party.recipes = this.state.recipes

      firebase.database().ref("/Parties").push(party);

      this.setState({ //reset all states relevant
        partyName: "",
        partyAddress: "",
        partyDetails: "",
        intoleranceList: [],
        dietList: [],
        addedGuests: [],
        recipes: [],
        guestsKeys: [],
        showGuestList: false,
        photoURL: this.state.photoURL,
      });
    }
  };

  toggleAddGuests = (e) => { //So we can display the existing guests menu
    e.preventDefault();
    this.setState({
      showGuestList: !this.state.showGuestList,
    });
  };

  handleImageChange = (e) => { //getting the file from user input file
    const files = e.target.files;
    this.setState({
      files: files,
    });
  };

  handleUploadImage = (e) => { //uploading the file to firebase storage and getting the url to state
    e.preventDefault();
    const bucketName = "images";
    if (this.state.files[0]) {
      const file = this.state.files[0];
      firebase
        .storage()
        .ref(`${bucketName}/${file.name}`)
        .put(file)
        .then(() => {
          firebase
            .storage()
            .ref(`${bucketName}`)
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
              this.setState({
                photoURL: url,
              });
              document.getElementById("partyImg").src = url;
            });
        });
    }
  };

  removeKey=(key)=>{ //when the user wants to remove a user from the guest, it removes the key from guest keys which is what generates all of our data
    const guestsKeys = this.state.guestsKeys.filter(item=> item !== key)
    this.setState(
      {
        guestsKeys,
      },
      () => {
        this.convertKeys(); //run these functions to get new profiles, intols, and diets
        this.createIntolerancesList();
        this.createDietList();
      }
    );
  }

  render() {
    return (
      <section className="createPartySection">
        {/*Form*/}
            <form className="wrapper" action="">
            <h2>Create a Party</h2>
            <div className="createPartyForm">
            <label htmlFor="Name of Party"></label>
            <input type="text" id="partyName" value={this.state.partyName} onChange={this.updateState} name="partyName" placeholder="Party Name"/>

            <label htmlFor="Address"></label>
            <input type="text" id="partyAddress" value={this.state.partyAddress} onChange={this.updateState} name="address" placeholder="Address"/>

            <label htmlFor="Details"></label>
            <input type="text" id="partyDetails" value={this.state.partyDetails} onChange={this.updateState} name="details" placeholder="Date and Time"/>

          {/* Image Upload */}
          
          <div className="imageInput">
            <label htmlFor="party image"></label>
            <input
              value={this.state.image}
              type="file"
              onChange={(e) => {
                this.handleImageChange(e);
              }}
            />
            <button
              onClick={(e) => {
                this.handleUploadImage(e);
              }}
            >
              Upload Image
            </button>
          </div>
          <div id="partyImg" className="partyImg">
            <img src={this.state.photoURL} alt="party"/>
          </div>
          </div>

          {/*Adding Guests Component*/}

          <div className="addExistingGuests">
          <button
            className="addGuests"
            type="submit"
            onClick={(e) => this.toggleAddGuests(e)}
          >
            Add Existing Guests
          </button>
          </div>
          <section className="viewSection">
            {this.state.showGuestList ? (
              <CreatePartyAddingGuests getChoice={(e) => this.getUserKey(e)}/>) 
              : null}
          </section>

          {/*Displaying Guests*/}
          <section className="viewSection">
            <h3>Added Guest List</h3>
            <ul className="viewUL">
              {this.state.addedGuests.map((invitedGuests, i) => {
                return (
                  <div className="viewLIContainer" key={i}>
                    <li className="viewLI" onClick={()=>this.removeKey(invitedGuests.key)}>
                      {/* close by The Icon Z from the Noun Project */}
                      <span aria-label="close"><img className="close" src={close} alt="" /></span>
                      <div className="imageContainer profileImage">
                      <img
                        className="guestImg"
                        src={invitedGuests.photoURL}
                        alt={invitedGuests.name}
                      />
                      </div>
                      <p className="guestName">{invitedGuests.name}</p>
                      <p>{invitedGuests.email}</p>
                    </li>
                  </div>
                );
              })}
            </ul>
          </section>

          {/*Diet List*/}
          <section className="dietsListSection">
            <h3>Diet List</h3>
            <ul>
              {this.state.dietList.map((diet, i) => {
                return (
                  <li key={i}>
                    <p>{diet}</p>
                  </li>
                );
              })}
            </ul>
          </section>

          {/*Intolerance List*/}
          <section className="intoleranceListSection">
            <h3>Intolerance List</h3>
            <ul>
              {this.state.intoleranceList.map((item, i) => {
                return (
                  <li key={i}>
                    <p>{item}</p>
                  </li>
                );
              })}
            </ul>
            <label htmlFor="getRecipesButton"></label>
            <button
              id="getRecipeButton"
              type="submit"
              onClick={(e) => this.getRecipes(e)}
            >
              Get Recipes
            </button>
          </section>

          {/*Recipe API CALL */}

          <section className="recipeGallerySection">
            <ul className="recipeGalleryUL">
              {this.state.error ?<h4>Sorry, we couldn't find any recipes. Maybe try serving water?</h4> : null}
              {this.state.recipes.map((recipeObj, i) => {
                return (
                  <li className="recipeLI" key={i}>
                    <h4 className="recipeLink">
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={recipeObj.sourceUrl}
                      >
                        {recipeObj.title}
                      </a>
                    </h4>
                    <div className="imageContainer">
                    <img className="recipeImg"
                      src={`https://spoonacular.com/recipeImages/${
                        recipeObj.id
                      }-${"480x360"}.${"jpg"}`}
                      alt={recipeObj.title}
                    />
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>

          <button id="createParty" type="submit" onClick={(e) => this.submitParty(e)}>Create Party</button>
        </form>
      </section>
    );
  }
};

export default CreateParty;
