import React, { Component } from 'react';
import firebase from '../firebase';

class CreateGuest extends Component {
  constructor() {
    super();
    this.state = {
      selectedFile: null,
      name: "",
      email: "",
      isPetFriendly: false,
      // Dietary Restrictions
      isVegan: false,
      isVegetatian: false,
      isPaleo: false,
      isDairyFree: false,
      isGlutenFree: false,
    };
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

  handleImageChange = (e) => {  
    this.setState({
      selectedFile: e.target.file
    })
      
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const dbRef = firebase.database().ref(`/Guests/`);
    dbRef.push({
      image: this.state.image,
      name: this.state.name,
      email: this.state.email,
      isPetFriendly: this.state.isPetFriendly,
      isVegan: this.state.isVegan,
      isVegetatian: this.state.isVegetatian,
      isPaleo: this.state.isPaleo,
      isDairyFree: this.state.isDairyFree,
      isGlutenFree: this.state.isGlutenFree,
      // key: ''
    });
  };

  render() {
    return (
      <div>
        <h2>Create Guest Form</h2>
        <form onSubmit={this.handleSubmit}>
          {/* Image input */}
          <h4>Upload an image of your choice</h4>
          <label for="img">Select image:</label>
          <input value={this.state.image} type="file" id="img" name="img" accept="image/*"></input>
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
          {/* Dietary Restrictions Input */}
          <ul>
            <li>
              <label>
                <input
                  type="checkbox"
                  value={this.state.isVegan}
                  name="isVegan"
                  onChange={this.handleChange}
                  checked={this.state.isVegan}
                />{" "}
                Vegan ?
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  value={this.state.isVegetatian}
                  name="isVegetarian"
                  onChange={this.handleChange}
                  checked={this.state.isVegetarian}
                />{" "}
                Vegetarian ?
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  value={this.state.isPaleo}
                  name="isPaleo"
                  onChange={this.handleChange}
                  checked={this.state.isPaleo}
                />{" "}
                Paleo ?
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  value={this.state.isDairyFree}
                  name="isDairyFree"
                  onChange={this.handleChange}
                  checked={this.state.isDairyFree}
                />{" "}
                Dairy free?
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  value={this.state.isGlutenFree}
                  name="isGlutenFree"
                  onChange={this.handleChange}
                  checked={this.state.isGlutenFree}
                />{" "}
                Gluten free?
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
            Your pet inclination:
            {this.state.isPetFriendly ? "pet friendly" : "not pet friendly"}
          </p>
          <p>
            Your dietary restictions:
            <ul>
              <li>Vegan: {this.state.isVegan ? "Yes" : "No"}</li>
              <li>Vegetatian: {this.state.isVegetarian ? "Yes" : "No"}</li>
              <li>Paleo: {this.state.isPaleo ? "Yes" : "No"}</li>
              <li>Dairy Free: {this.state.isDairyFree ? "Yes" : "No"}</li>
              <li>Gluten Free: {this.state.isGlutenFree ? "Yes" : "No"}</li>
            </ul>
            {/* {this.state.isPetFriendly ? "pet friendly" : "not pet friendly"} */}
          </p>
        </div>
      </div>
    );
  }
}


export default CreateGuest;