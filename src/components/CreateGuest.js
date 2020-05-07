import React, { Component } from 'react';
import firebase from '../firebase';

class CreateGuest extends Component {
  constructor() {
    super();
    this.state = {
      // selectedFile: null,
      name: "",
      email: "",
      isPetFriendly: false,
      diet:'',
      // Dietary Restrictions
      isDairyFree: false,
      isEggFree: false,
      isGlutenFree: false,
      isGrainFree: false,
      isPeanutFree: false,
      isSeafoodFree: false,
      isSesameFree: false,
      isShellfishFree: false,
      isSoyFree: false,
      isSulfiteFree: false,
      isTreeNutFree: false,
      isWheatFree: false,
      allergies: []
    };
  }

  populateAllergies = () => {
    const allergiesArray = [];
    this.state.isDairyFree 
      ? allergiesArray.push('dairy') 
      : console.log('dont push');
    this.state.isEggFree
      ? allergiesArray.push("egg")
      : console.log("dont push");
    this.state.isGlutenFree
      ? allergiesArray.push("gluten")
      : console.log("dont push");
    this.state.isGrainFree
      ? allergiesArray.push("grain")
      : console.log("dont push");
    this.state.isPeanutFree
      ? allergiesArray.push("peanut")
      : console.log("dont push");
    this.state.isSeafoodFree
      ? allergiesArray.push("seafood")
      : console.log("dont push");
    this.state.isSesameFree
      ? allergiesArray.push("sesame")
      : console.log("dont push");
    this.state.isShellfishFree
      ? allergiesArray.push("shellfish")
      : console.log("dont push");
    this.state.isSoyFree
      ? allergiesArray.push("soy")
      : console.log("dont push");
    this.state.isSulfiteFree
      ? allergiesArray.push("sulfite")
      : console.log("dont push");
    this.state.isTreeNutFree
      ? allergiesArray.push("tree nut")
      : console.log("dont push");
    this.state.isWheatFree
      ? allergiesArray.push("shellfish")
      : console.log("dont push");

      return allergiesArray;
      
    }
    
    handleChange = (e) => {
      // make a copy of current state before you run setState
      const { name, value, type, checked } = e.target;
      type === "checkbox"
      ? this.setState({
        [name]: checked,
      })
      : this.setState({
        [name]: value,
      });        
    };
    
    // handleImageChange = (e) => {
      //   this.setState({
  //     selectedFile: e.target.file,
  //   });
  // };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const allergiesArray = this.populateAllergies();
    console.log(allergiesArray);
    this.setState({
      allergies: allergiesArray,
    }, () => {
      const dbRef = firebase.database().ref(`/Guests/`);
      dbRef.push({
        // image: this.state.image,
        name: this.state.name,
        email: this.state.email,
        petFriendly: this.state.isPetFriendly,
        diet: this.state.diet,
        allergies: this.state.allergies,
      });
    });
    
  };

  getChoice = (event) =>{
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Create Guest Form</h2>
        <form onSubmit={this.handleSubmit}>
          {/* Image input */}
          <h4>Upload an image of your choice</h4>
          <label for="img">Select image:</label>
          <input
            value={this.state.image}
            type="file"
            id="img"
            name="img"
            accept="image/*"
          ></input>
          <br />
          <p></p>
          {/* Name input */}
          <input
            type="text"
            value={this.state.name}
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
          />
          <br />
          {/* email Input */}
          <input
            type="email"
            value={this.state.email}
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <br />
          <p></p>
          {/* Pet friendliness input */}
          <label>
            <input
              type="checkbox"
              value={this.state.isPetFriendly}
              name="isPetFriendly"
              checked={this.state.isPetFriendly}
              onChange={this.handleChange}
            />
            Is Pet Friendly ?
          </label>
          <br />
          <p></p>
          {/* Diet Input */}
          <label>
            <input
              type="radio"
              name="diet"
              value="Gluten free"
              checked={this.state.diet === "Gluten free"}
              onChange={this.handleChange}
            />{" "}
            Gluten Free
          </label>
          <label>
            <input
              type="radio"
              name="diet"
              value="Vegetarian"
              checked={this.state.diet === "Vegetarian"}
              onChange={this.handleChange}
            />{" "}
            Vegetarian
          </label>
          <label>
            <input
              type="radio"
              name="diet"
              value="Vegan"
              checked={this.state.diet === "Vegan"}
              onChange={this.handleChange}
            />{" "}
            Vegan
          </label>
          <label>
            <input
              type="radio"
              name="diet"
              value="Pescetarian"
              checked={this.state.diet === "Pescetarian"}
              onChange={this.handleChange}
            />{" "}
            Pescetarian
          </label>
          <label>
            <input
              type="radio"
              name="diet"
              value="Paleo"
              checked={this.state.diet === "Paleo"}
              onChange={this.handleChange}
            />{" "}
            Paleo
          </label>
          <label>
            <input
              type="radio"
              name="diet"
              value="Whole30"
              checked={this.state.diet === "Whole30"}
              onChange={this.handleChange}
            />{" "}
            Whole30
          </label>
          {/* Dietary Restrictions Input */}
          <h4>Intolerances</h4>
          <ul>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="isDairyFree"
                  onChange={this.handleChange}
                  checked={this.state.isDairyFree}
                />{" "}
                Dairy
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="isEggFree"
                  onChange={this.handleChange}
                  checked={this.state.isEggFree}
                />{" "}
                Egg
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="isGlutenFree"
                  onChange={this.handleChange}
                  checked={this.state.isGlutenFree}
                />{" "}
                Gluten
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="isGrainFree"
                  onChange={this.handleChange}
                  checked={this.state.isGrainFree}
                />{" "}
                Grain
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="isPeanutFree"
                  onChange={this.handleChange}
                  checked={this.state.isPeanutFree}
                />{" "}
                Peanut
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="isSeafoodFree"
                  onChange={this.handleChange}
                  checked={this.state.isSeafoodFree}
                />{" "}
                Seafood
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="isSesameFree"
                  onChange={this.handleChange}
                  checked={this.state.isSesameFree}
                />{" "}
                Sesame
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="isShellfishFree"
                  onChange={this.handleChange}
                  checked={this.state.isShellfishFree}
                />{" "}
                Shellfish
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="isSoyFree"
                  onChange={this.handleChange}
                  checked={this.state.isSoyFree}
                />{" "}
                Soy
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="isSulfiteFree"
                  onChange={this.handleChange}
                  checked={this.state.isSulfiteFree}
                />{" "}
                Sulfite
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="isTreeNutFree"
                  onChange={this.handleChange}
                  checked={this.state.isTreeNutFree}
                />{" "}
                Tree Nut
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="isWheatFree"
                  onChange={this.handleChange}
                  checked={this.state.isWheatFree}
                />{" "}
                Wheat
              </label>
            </li>
          </ul>

          {/* Text Area */}
          {/* <h3>Something you would like us to know</h3>
              <textarea
                value={"Something else you would like to mention"}
                onChange={this.handleChange}
              /> */}
          <br />
          <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
        </form>

        <h2>Guest Information</h2>
        <div className="guestInformation">
          <p>Your name: {this.state.name}</p>
          <p>Your email id: {this.state.email}</p>
          <p>
            Your pet inclination:{" "}
            {this.state.isPetFriendly ? "pet friendly" : " "}
          </p>
          <p>Your diet: {this.state.diet}</p>
          <p>Your dietary restictions: {this.state.allergies}</p>
        </div>
      </div>
    );
  }
}


export default CreateGuest;