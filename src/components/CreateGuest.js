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

              <label>
                <input
                  type="checkbox"
                  name="isVegan"
                  onChange={this.handleChange}
                  checked={this.state.isVegan}
                />{" "}
                Vegan?
              </label>
              <br />

              <label>
                <input
                  type="checkbox"
                  name="isKosher"
                  onChange={this.handleChange}
                  checked={this.state.isKosher}
                />{" "}
                Kosher?
              </label>
              <br />

              <label>
                <input
                  type="checkbox"
                  name="isPeanutFree"
                  onChange={this.handleChange}
                  checked={this.state.isPeanutFree}
                />{" "}
                Peanut free?
              </label>
              <br />

              <label>
                <input
                  type="checkbox"
                  name="isLactoseFree"
                  onChange={this.handleChange}
                  checked={this.state.isLactoseFree}
                />{" "}
                Lactose free?
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  name="isGlutenFree"
                  onChange={this.handleChange}
                  checked={this.state.isGlutenFree}
                />{" "}
                Gluten free?
              </label>
              <br />
              <p></p>
              <textarea
                value={"Some else you would like to mention"}
                onChange={this.handleChange}
              />
              <br />
              <button>Submit</button>
            </form>

            <div>
              <p>Your name: {this.state.name}</p>
              <p>Your email id: {this.state.email}</p>
              <p>
                Your pet inclination:
                {this.state.isPetFriendly ? "pet friendly" : "not pet friendly"}
              </p>
              <p>
                Your dietary restictions:
                Vegan: 
                
                {/* {this.state.isPetFriendly ? "pet friendly" : "not pet friendly"} */}
              </p>
            </div>
          </div>
        );
    }
}


export default CreateGuest;