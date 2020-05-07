import React, { Component } from 'react';
import axios from 'axios';
import CreatePartyAddingGuests from './CreatePartyAddingGuests'
import firebase from 'firebase'


class CreateParty extends Component {
    constructor() {
        super();
        this.state = {
            recipes: [],
            userInputPartyName:'',
            userInputAddress:'',
            userInputDetails:'',
            guests:[],
            guestsKeys:[],
            addedGuests:[],
            dietList:[],
            intoleranceList:[]
        };
    }

   


    componentDidMount() {
        // this.getRecipes();
        
    }

    getRecipes = (e) => {
        e.preventDefault();
        // Spoonacular API call
        const url = 'https://api.spoonacular.com/recipes/search';
        const key = 'ac3ee15e730b4a6c9dbc8bfa56524854';

        const intoleranceAxios = this.state.intoleranceList.join()
        // console.log(intoleranceAxios);

        const dietAxios = this.state.dietList.join()

        axios({
            method: 'GET',
            url: url,
            params: {
                "apiKey": key,
                query:'dinner',
                format: 'json',
                intolerances: intoleranceAxios ,
                diet: dietAxios
            }
        }).then((res) => {
            
            this.setState({
                recipes: res.data.results
            })
        }).catch((error) =>{
            alert (error)
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
        const guestsKeys = this.state.guestsKeys
        if (guestsKeys.includes(key) === false) guestsKeys.push(key);
        this.setState({
            guestsKeys
        },()=>{
            this.convertKeys()
            this.createIntolerancesList()
            this.createDietList()
        // },()=>{
            // this.createIntolerancesList()
            // this.createDietList()
        }
        )
    }

    createDietList = () =>{
        const dietList = []
        for (let i = 0; i < this.state.guestsKeys.length; i++) {
            firebase.database().ref('/Guests/' + this.state.guestsKeys[i]).on('value', (response) => {
                // console.log(response.val().diet);
                const diet = response.val().diet
                // dietList.push(diet)
                if (dietList.includes(diet) === false) dietList.push(diet);
            })
        }
        this.setState({
           dietList
        })
    }

    createIntolerancesList = () => {
        const intoleranceList = []
        for (let i = 0; i < this.state.guestsKeys.length; i++) {
            firebase.database().ref('/Guests/' + this.state.guestsKeys[i]).on('value', (response) => {
                // console.log(response.val().diet);
                const intolerance = response.val().allergies
                for (let i = 0; i < intolerance.length; i++) {
                        if (intoleranceList.includes(intolerance[i]) === false) intoleranceList.push(intolerance[i]);
                }
                // intolerance.map((allergy)=>{
                // })
                // dietList.push(diet)
            })
        }
        this.setState({
            intoleranceList
        })
    }
    

    convertKeys=()=>{
        const addedGuests = []
        for (let i=0; i <this.state.guestsKeys.length;i++){
            firebase.database().ref('/Guests/'+this.state.guestsKeys[i]).on('value',(response)=>{
                const profile = response.val()
                addedGuests.push(profile)
            })
        }
        this.setState({
            addedGuests
        })
    }

    render() {
        // const intoleranceAxios = this.state.intoleranceList.join()
        // console.log(intoleranceAxios);
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
                        <label htmlFor="">Get Recipes</label>
                            {/* name from firebase */}
                            <label htmlFor=""></label>
                            <input type="checkbox"/>
                            <button type="submit" onClick={(e)=> this.getRecipes(e)}>Get Recipes</button>
                        <button type="submit">Create Party</button>
                    </form>

                    {/* Form for adding guests */}
                    {/* Populate with list of guests in data base */}

                </section>
                    <CreatePartyAddingGuests getChoice={(e)=>this.getUserKey(e)} />
                <section className="invitedGuests">
                    {this.state.addedGuests.map((invitedGuests)=>{
                        return(
                            <ul>
                                <li>
                                    <h3>{invitedGuests.name}</h3>
                                    <p>{invitedGuests.email}</p>
                                </li>
                            </ul>

                        )
                    })}
                </section>
                <section className="dietsListSection">
                    {this.state.dietList.map((diet) => {
                        return (
                            <ul>
                                <li>
                                    <p>{diet}</p>
                                </li>
                            </ul>

                        )
                    })}
                </section>
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