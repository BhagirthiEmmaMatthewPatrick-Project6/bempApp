import React, { Component } from 'react'
import firebase from 'firebase'
import {Link} from 'react-router-dom'
import axios from 'axios';


class ViewPartiesFocus extends Component{
    constructor(){
        super();
        this.state={
            focusedParty:{
                partyName:'',
                partyDetails:'',
                photoURL:'',
                dietList:[],
                intoleranceList:[],
                addedGuests:[],
                recipes:[]
            }
        }
    }

    syncParty=()=>{
        firebase.database().ref('/Parties/'+this.props.match.params.id).on('value',(results)=>{
            this.setState({
                focusedParty: results.val()
            })
        })
    }

    componentDidMount(){
        this.syncParty();
    }


    focusUser=(e)=>{
        this.setState({
            focusedUser: e.target.id
        })
    }

    getRecipes = (e) => {
        e.preventDefault();
        // Spoonacular API call
        const url = "https://api.spoonacular.com/recipes/search";
        const key = "ac3ee15e730b4a6c9dbc8bfa56524854";
    
        const intoleranceAxios = this.state.focusedParty.intoleranceList.join();
        const dietAxios = this.state.focusedParty.dietList.join();
    
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
            console.log(res.data);
            
            const focusedParty = {...this.state.focusedParty}
            focusedParty.recipes=res.data.results
            if (focusedParty.recipes.length===0){
                focusedParty.recipes = [{title:'No results found'}]
            }
            this.setState({
                focusedParty
            });
            })
            .catch((error) => {
            alert(error);
            });
        };

    render(){
        
        return(
            <section className="viewPartiesFocusSection wrapper">
                <Link className="link" activeClassName="currentPage" to="/bempApp/viewParties">...go back</Link>
                <div className="profileCard">
                    <div className="imageContainer">
                        <img src={this.state.focusedParty.photoURL} alt={this.state.focusedParty.partyDetails}/>
                    </div>
                    <h2>{this.state.focusedParty.partyName}</h2>
                    <p>{this.state.focusedParty.partyDetails}</p>

                    <div className="guestList">
                        <h3>Guest List</h3>
                        <ul className="guestListUL">
                            {this.state.focusedParty.addedGuests.map((guest, i)=>{
                                return <li className="guestLI" key={i}><p>{guest.name}</p></li>
                            })}
                        </ul>
                    </div>

                    <div className="restrictionsList">
                        <h3>Warning! Be careful of the following:</h3>
                        <ul className="dietListFocusUL">
                            {this.state.focusedParty.dietList.map((diet, i)=>{
                                return <li className="dietFocusLI" key={i}><p>{diet}</p></li>
                            })}
                        </ul>

                        <ul className="intoleranceListFocusUL">
                            {this.state.focusedParty.intoleranceList.map((intolerance, i)=>{
                                return <li className="intoleranceFocusLI" key={i}><p>{intolerance}</p></li>
                            })}
                        </ul>
                    </div>

                    <section className="recipeGallerySection">
                        <h3>Suggested Recipes</h3>
                        <ul className="recipeGalleryUL">
                            {this.state.focusedParty.recipes!==undefined?this.state.focusedParty.recipes.map((recipeObj, i) => {
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
                                })
                                :<>
                                <button onClick={(e)=>this.getRecipes(e)}>Search Recipes</button>
                                </>
                            }
                            
                        </ul>
                    </section>
                </div>
            </section>
        )
    }

}

export default ViewPartiesFocus