import React, { Component } from 'react';
import firebase from '../firebase';


class CreateGuest extends Component {
  constructor() {
    super();
    this.state = {
      files: null,
      photoURL: "https://www.rawlinsdavy.com/wp-content/uploads/2018/12/profile-placeholder-300x300.png",
      name: "",
      email: "",
      isPetFriendly: false,
      diet: "",
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
      allergies: [],
    };
  }

  populateAllergies = () => {
      const allergiesArray = [];

      if (this.state.isDairyFree) {
        allergiesArray.push("Dairy");
      }
      if (this.state.isEggFree) {
        allergiesArray.push("Egg");
      }
      if (this.state.isGrainFree) {
        allergiesArray.push("Grain");
      }
      if (this.state.isPeanutFree) {
        allergiesArray.push("Peanut");
      }
      if (this.state.isSeafoodFree) {
        allergiesArray.push("Seafood");
      }
      if (this.state.isSesameFree) {
        allergiesArray.push("Sesame");
      }
      if (this.state.isShellfishFree) {
        allergiesArray.push("Shellfish");
      }
      if (this.state.isSoyFree) {
        allergiesArray.push("Soy");
      }
      if (this.state.isSulfiteFree) {
        allergiesArray.push("Sulfite");
      }
      if (this.state.isTreeNutFree) {
        allergiesArray.push("Tree Nut");
      }
      if (this.state.isWheatFree) {
        allergiesArray.push("Wheat");
      }
    
      this.setState(
        {
          allergies: allergiesArray,
        }
      );
  }

  handleChange = (e) => {
    // make a copy of current state before you run setState
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        }, (() => {
            this.populateAllergies();
        }))
      : this.setState({
          [name]: value,
        });    
  };

  handleImageChange = (e) => {
    const files = e.target.files;
    this.setState({
      files: files
    })
  };

  handleUploadImage = (e) => {
    e.preventDefault();
    const bucketName = 'images';
    if(this.state.files){
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
              document.getElementById("guestImg").src = url;
            });
        });
    }
  };

  clearState = () => {
    this.setState({
      files: null,
      photoURL:
        "https://www.rawlinsdavy.com/wp-content/uploads/2018/12/profile-placeholder-300x300.png",
      name: "",
      email: "",
      isPetFriendly: false,
      diet: "",
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
      allergies: [],
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
        if(this.state.name && this.state.email){
          const dbRef = firebase.database().ref(`/Guests/`);
          dbRef.push({
            name: this.state.name,
            email: this.state.email,
            petFriendly: this.state.isPetFriendly,
            diet: this.state.diet,
            allergies: this.state.allergies,
            photoURL: this.state.photoURL
          });
          this.clearState();
        } else {
          alert("Name and Email are mandatory fields");
        }

  };

  render() {
    const intolerances = this.state.allergies.toString();
    return (
      <section className="createGuestSection wrapper">
        <h2>Create Your Guests</h2>
        <div className="createGuestCenter">
          <form className="createGuestForm" onSubmit={this.handleSubmit}>
            {/* Name input */}
            <label className="guestName" htmlFor="Guest Name"></label>
            <input
              className="textInput"
              type="text"
              value={this.state.name}
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
            />
            {/* email Input */}

            <label htmlFor="Guest email"></label>
            <input
              className="textInput"
              type="email"
              value={this.state.email}
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            />

            {/* Pet friendliness input */}
            <div className="petFriend">
              <label htmlFor="">Are you ok with pets?</label>
              <input
                type="checkbox"
                value={this.state.isPetFriendly}
                name="isPetFriendly"
                checked={this.state.isPetFriendly}
                onChange={this.handleChange}
              />
            </div>
            {/* Image input */}
            <div className="imageInput">
            <p>Upload an image for your profile</p>
              <label htmlFor="select an image to upload"></label>
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
                Upload
              </button>
            </div>
            {/* Diet Input */}
            <h3 className="dietHeader">Diet</h3>
            <div className="dietInput">
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
                Whole 30
              </label>
            </div>
            {/* Dietary Restrictions Input */}
            <h3>Intolerances</h3>
            <ul className="intolerances">
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
            <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
          </form>

          <h5>Guest Information</h5>
          <div className="guestInformation">
            <div className="guestInfoCenter">
              <div className="imageContainer">
                <img
                  className="guestImage"
                  id="guestImg"
                  src={this.state.photoURL}
                  alt=""
                />
              </div>
              <p>Name: {this.state.name}</p>
              <p>Email: {this.state.email}</p>
              <p>Pets ok: {this.state.isPetFriendly ? "pet friendly" : " "}</p>
              <p>Diet: {this.state.diet}</p>
              <p>Intolerances: {intolerances}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default CreateGuest;