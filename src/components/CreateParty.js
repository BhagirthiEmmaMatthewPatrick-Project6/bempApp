import React, { Component } from 'react';
import axios from 'axios';
import CreatePartyAddingGuests from './CreatePartyAddingGuests'
import firebase from 'firebase'


class CreateParty extends Component {
    constructor() {
        super();
        this.state = {
            recipes: [],
            intolerances: [],
            diet: [],
            userInputPartyName:'',
            userInputAddress:'',
            userInputDetails:'',
            guests:[],
            addedGuests:[]
        };
    }

   


    componentDidMount() {
        // this.getRecipes();
        const dbRef = firebase.database().ref('/Guests');
        dbRef.on('value', (response) => {

            const data = response.val();
            const intolerances = []
            const diet = []
            for (let key in data) {
                
                intolerances.push({key})
                diet.push({key})
            }
            
            this.setState({
                intolerances,
                diet
            })
        })
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

    handleUserParty = (event) => {
        this.setState({
            userInputPartyName: event.target.value  
        })
    }

    handleUserAddress = (event) => {
        this.setState({
            userInputAddress: event.target.value
        })
    }

    handleUserDetails = (event) => {
        this.setState({
            userInputDetails: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.userParty && this.state.userAddress && this.state.UserDetails !== '') {
            const dbRef = firebase.database().ref();
            dbRef.push(this.state.userParty);
            dbRef.push(this.state.userAddress);
            dbRef.push(this.state.userDetails);
            this.setState({
                userInputPartyName: '',
                userInputAddress: '',
                userInputDetails: ''
            });
    }
}

    getUserKey = (event) => {
        const key = event.target.id
        firebase.database().ref('/Guests/'+key).on('value',(response)=>{
            const addedPerson= response.val()
            const addedGuests =this.state.addedGuests
            if (addedGuests.indexOf(addedPerson) === -1) addedGuests.push(addedPerson)
            // if (addedGuests.includes(addedPerson) === false) addedGuests.push(addedPerson);
            this.setState({
                addedGuests
            })
        })
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
                            value={this.state.userInputPartyName} onChange={this.handleUserParty}
                            name="partyName"
                            placeholder="Party Name"
                        />
                        <label htmlFor="Address">Address</label>
                        <input
                            type="text"
                            id="address"
                            value={this.state.userInputPartyAddress} onChange={this.handleUserAddress}
                            name="address"
                            placeholder="Address"
                        />
                        <label htmlFor="Details">Details</label>
                        <input
                            type="text"
                            id="details"
                            value={this.state.userInputDetails} onChange={this.handleUserDetails}
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
                    <CreatePartyAddingGuests getChoice={(e)=>this.getUserKey(e)} />
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