import React, { Component } from 'react';
import axios from 'axios';
import CreatePartyAddingGuests from './CreatePartyAddingGuests'
import firebase from 'firebase'


class CreateParty extends Component {
    constructor() {
        super();
        this.state = {
            recipes: [],
            partyName:'',
            partyAddress:'',
            partyDetails:'',
            guestsKeys:[],
            addedGuests:[],
            dietList:[],
            intoleranceList:[],
            showGuestList:false,
            photoURL:'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/shutterstock_199419065.jpg',
        };
    }



    componentDidMount() {
        
    }

    getRecipes = (e) => {
        e.preventDefault();
        // Spoonacular API call
        const url = 'https://api.spoonacular.com/recipes/search';
        const key = 'ac3ee15e730b4a6c9dbc8bfa56524854';

        const intoleranceAxios = this.state.intoleranceList.join()
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
        }).catch((error)=>{
            alert (error)
        })
    } 

    updateState = (event) => {
        this.setState({
            [event.target.id] : event.target.value  
        })
    }

    getUserKey = (key) => {
        const guestsKeys = this.state.guestsKeys
        if (guestsKeys.includes(key) === false) guestsKeys.push(key);
        this.setState({
            guestsKeys
        },()=>{
            this.convertKeys()
            this.createIntolerancesList()
            this.createDietList()
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
                if (dietList.includes(diet) === false && diet !== undefined) dietList.push(diet);
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
                const intolerance = response.val().allergies
                for (let i = 0; i < intolerance.length; i++) {
                        if (intoleranceList.includes(intolerance[i]) === false && intolerance[i] !== undefined) intoleranceList.push(intolerance[i]);
                }
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

    submitParty=(e)=>{
        e.preventDefault()
        // console.log('hello it me');
        if (this.state.partyName && this.state.partyAddress && this.state.partyDetails !== '') {
            const party ={}
            party.partyName = this.state.partyName
            party.partyAddress = this.state.partyAddress
            party.partyDetails = this.state.partyDetails
            party.intoleranceList = this.state.intoleranceList
            party.dietList = this.state.dietList
            party.addedGuests = this.state.addedGuests
            party.photoURL = this.state.photoURL
            // console.log(party);
            
            firebase.database().ref('/Parties').push(party)

            this.setState({
                partyName :'',
                partyAddress :'',
                partyDetails :'',
                intoleranceList: [],
                dietList: [],
                addedGuests:[],
                recipes:[],
                guestKeys:[],
                showGuestList:false,
                photoURL:'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/shutterstock_199419065.jpg',
            })
        }
        
    }

    toggleAddGuests=(e)=>{
        e.preventDefault()
        this.setState({
            showGuestList:!this.state.showGuestList
        })
    }

    render() {
        return (
            <section className="createPartySection wrapper">
                {/*Form*/}
                    <form className="createPartyForm" action="">
                        <label htmlFor="Name of Party"></label>
                        <input type="text" id="partyName" value={this.state.partyName} onChange={this.updateState} name="partyName" placeholder="Party Name"/>

                        <label htmlFor="Address"></label>
                        <input type="text" id="partyAddress" value={this.state.partyAddress} onChange={this.updateState} name="address" placeholder="Address"/>

                        <label htmlFor="Details"></label>
                        <input type="text" id="partyDetails" value={this.state.partyDetails} onChange={this.updateState} name="details" placeholder="Date and Time"/>


                        {/*Adding Guests Component*/}
                            <button className="addGuests" type="submit" onClick={(e) => this.toggleAddGuests(e)}>Add Existing Guests</button>
                        <ul className="addGuestsUL">
                            {this.state.showGuestList ? <CreatePartyAddingGuests getChoice={(e)=>this.getUserKey(e)} />:null}
 
                        </ul>
                        {/*Displaying Guests*/}
                        <section className="invitedGuestsSection">
                        <h2>Guest List</h2>
                            {this.state.addedGuests.map((invitedGuests)=>{
                                return(
                                    <ul className="guestList">
                                        <li>
                                            <img src={invitedGuests.photoURL} alt={`Photo of ${invitedGuests.name}`}/>
                                            <h3>{invitedGuests.name}</h3>
                                            <p>{invitedGuests.email}</p>
                                        </li>
                                    </ul>
                                )
                            })}
                        </section>

                        {/*Diet List*/}
                        <section className="dietsListSection">
                            <h2>Diet List</h2>
                            <ul>
                                {this.state.dietList.map((diet) => {
                                    return (
                                            <li>
                                                <p>{diet}</p>
                                            </li>
                                    )
                                })}
                            </ul>
                        </section>

                        
                        {/*Intolerance List*/}
                        <section className="intoleranceListSection">
                            <h2>Intolerance List</h2>
                            <ul>
                                {this.state.intoleranceList.map((item) => {
                                    return (
                                            <li>
                                                <p>{item}</p>
                                            </li>
                                    )
                                })}
                            </ul>
                        <label htmlFor="getRecipesButton"></label>
                        <button id="getRecipeButton" type="submit" onClick={(e) => this.getRecipes(e)}>Get Recipes</button>
                        </section>

                        {/*Recipe API CALL */}
                        <section className="recipeGallerySection">
                            <h2>Suggested Recipes</h2>
                            <ul className="recipeGalleryUL">
                                {this.state.recipes.map((recipeObj) => {
                                    return (
                                        <li>
                                            <h3><a rel="noopener noreferrer" target="_blank" href={recipeObj.sourceUrl}>{recipeObj.title}</a></h3>
                                            <img src={`https://spoonacular.com/recipeImages/${recipeObj.id}-${"480x360"}.${"jpg"}`} alt={recipeObj.title}/>
                                        </li>
                                    )
                                })}
                            </ul>
                        </section>

                        <button id="createParty" type="submit" onClick={(e)=>this.submitParty(e)}>Create Party</button>
                    </form>
            </section>
        )
    }

};

export default CreateParty;