import React, { Component } from 'react';
import axios from 'axios';
import CreatePartyAddingGuests from './CreatePartyAddingGuests'


class CreateParty extends Component {
    constructor() {
        super();
        this.state = {
            recipes: [],
            intolerances: [],
            diet: [],
            userInputPartyName:'',
            userInputAddress:'',
            userInputDetails:''

        };
    }

   


    componentDidMount() {
        // this.getRecipes();
        
    }

    getRecipes = () => {
        // Spoonacular API call
        const url = 'https://api.spoonacular.com/recipes/search?apiKey=ac3ee15e730b4a6c9dbc8bfa56524854&query=dinner&intolerances=gluten';
        const key = 'ac3ee15e730b4a6c9dbc8bfa56524854';

        axios({
            method: 'GET',
            url: url,
            params: {
            "apiKey": key,
            format: 'json',
            intolerances: "gluten",
            diet: " "
            }
        }).then((res) => {
            
            this.setState({
                recipes: res.data.results
            })
        })
    } 
    
    // handleSubmit - () => {}??

    handleUserInput = (event) => {
        console.log(event.target.id);
        this.setState({
            userInputPartyName: event.target.id,
            userInputAddress: event.target.id,
            userInputDetails: event.target.id
        })
    }

    getChoice = (event) =>{
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <section>
                {/* form for creating party */}
                {/* create party form will only submit after guests have been added and API call is done. */}
                    <form className="formOne" action="">
                        <label htmlFor="Name of Party">Name of Party</label>
                        <input
                            type="text"
                            id="partyName"
                            value={this.state.userInputPartyName} onChange={this.handleUserInput}
                            name="partyName"
                            placeholder="Party Name"
                        />
                        <label htmlFor="Address">Address</label>
                        <input
                            type="text"
                            id="address"
                            value={this.state.userInputPartyAddress} onChange={this.handleUserInput}
                            name="address"
                            placeholder="Address"
                        />
                        <label htmlFor="Details">Details</label>
                        <input
                            type="text"
                            id="details"
                            value={this.state.userInputDetails} onChange={this.handleUserInput}
                            name="details"
                            placeholder="ie. Date and Time"
                        />
                        <label htmlFor="Add Guests">Add Guests</label>
                            {/* name from firebase */}
                            <label htmlFor=""></label>
                            <input type="checkbox"/>
                            <button type="submit" onClick={this.getRecipes}>Add Guests</button>
                        <button type="submit">Create Party</button>
                    </form>

                    {/* Form for adding guests */}
                    {/* Populate with list of guests in data base */}

                </section>
                    <CreatePartyAddingGuests getChoice={this.getChoice} />
                <ul className="recipeGallery">
                    {this.state.recipes.map((recipeObj) => {
                        return (
                            
                            <li>
                                <h2><a href={recipeObj.sourceUrl}>{recipeObj.title}</a></h2>
                                <img src={`https://spoonacular.com/recipeImages/${recipeObj.id}-${"480x360"}.${"jpg"}`} alt={recipeObj.title}/>
                            </li>
                        )

                    })}

                </ul>
            </div>
        )
    }

};

export default CreateParty;