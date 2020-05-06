import React, { Component } from 'react';
import { render } from '@testing-library/react';

class CreateGuest extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            isPetFriendly: false,
            // Dietary Restrictions
            isVegan: false,
            isVegetatian: false,
            isPaleo: false,
            isDairyFree: false,
            isGlutenFree: false,
            isWheatFree: false,
            isFatFree: false,
            isLowSugar: false,
            isEggFree: false,
            isPeanutFree: false,
            isTreeNutFree: false,
            isSoyFree: false,
            isFishFree: false,
            isShellFishFree: false
            // “vegan”, “vegetarian”, “paleo”, “dairy-free”, “gluten-free”, “wheat-free”, “fat-free”, “low-sugar”, “egg-free”, “peanut-free”, “tree-nut-free”, “soy-free”, “fish-free”, “shellfish-free”
        }
    }

    handleChange = (e) => {
        // make a copy of current state before you run setState
        const {name, value, type, checked} = e.target;
        type === "checkbox"
          ? this.setState({
              [name]: checked
            })
          : this.setState({
              [name]: value
            });
    }

    render(){
        return (
          <div>
            <form>
              <input
                type="text"
                value={this.state.name}
                name="name"
                placeholder="Name"
                onChange={this.handleChange}
              />
              <br />
              <input
                type="email"
                value={this.state.email}
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
              <br />
              <p></p>

              <label>
                <input
                  type="checkbox"
                  name="isPetFriendly"
                  checked={this.state.isPetFriendly}
                  onChange={this.handleChange}
                />
                Is Pet Friendly ?
              </label>
              <br />
              <p></p>

              <ul>
                <li>
                  <label>
                    <input
                      type="checkbox"
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
                      name="isGlutenFree"
                      onChange={this.handleChange}
                      checked={this.state.isGlutenFree}
                    />{" "}
                    Gluten free?
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
                    Wheat free?
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
                    Wheat free?
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
                    Wheat free?
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
                    Wheat free?
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
                    Wheat free?
                  </label>
                </li>
              </ul>

              {/* Text Area */}
              <h3>Something you would like us to know</h3>
              <textarea
                value={"Something else you would like to mention"}
                onChange={this.handleChange}
              />
              <br />
              <button>Submit</button>
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
                  <li>Wheat Free: {this.state.isWheatFree ? "Yes" : "No"}</li>
                  <li>Fat Free: {this.state.isVegan ? "Yes" : "No"}</li>
                  <li>Low Sugar: {this.state.isVegan ? "Yes" : "No"}</li>
                  <li>Egg Free: {this.state.isVegan ? "Yes" : "No"}</li>
                  <li>Peanut Free: {this.state.isVegan ? "Yes" : "No"}</li>
                  {/* <li>Tree Nut Free: {this.state.isVegan ? "Yes" : "No"}</li>
                  <li>Soy Free: {this.state.isVegan ? "Yes" : "No"}</li>
                  <li>Fish Free: {this.state.isVegan ? "Yes" : "No"}</li>
                  <li>Shell Fish Free: {this.state.isVegan ? "Yes" : "No"}</li> */}
                </ul>
                {/* {this.state.isPetFriendly ? "pet friendly" : "not pet friendly"} */}
              </p>
            </div>
          </div>
        );
    }
}


export default CreateGuest;