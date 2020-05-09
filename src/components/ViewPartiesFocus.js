import React, { Component } from 'react'
import firebase from 'firebase'

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
            console.log(results.val());
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

    render(){
        console.log(this.state.focusedParty);
        
        return(
            <section className="viewPartiesFocusSection wrapper">
                <div className="profileCard">
                    <div className="imageContainer">
                        <img src={this.state.focusedParty.photoURL} alt={this.state.focusedParty.partyDetails}/>
                    </div>
                    <h2>{this.state.focusedParty.partyName}</h2>
                    <p>{this.state.focusedParty.partyDetails}</p>

                    <div className="guestList">
                        <h3>Guest List</h3>
                        <ul className="guestListUL">
                            {this.state.focusedParty.addedGuests.map((guest)=>{
                                return <li className="guestLI"><p>{guest.name}</p></li>
                            })}
                        </ul>
                    </div>

                    <div className="restrictionsList">
                        <h3>Warning! Be careful of the following:</h3>
                        <ul className="dietListFocusUL">
                            {this.state.focusedParty.dietList.map((diet)=>{
                                return <li className="dietFocusLI"><p>{diet}</p></li>
                            })}
                        </ul>

                        <ul className="intoleranceListFocusUL">
                            {this.state.focusedParty.intoleranceList.map((intolerance)=>{
                                return <li className="intoleranceFocusLI"><p>{intolerance}</p></li>
                            })}
                        </ul>
                    </div>

                    <section className="recipeGallerySection">
                        <h3>Suggested Recipes</h3>
                        <ul className="recipeGalleryUL">
                        {this.state.focusedParty.recipes.map((recipeObj) => {
                            return (
                            <li className="recipeLI">
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
                        })}
                        </ul>
                    </section>
                </div>
            </section>
        )
    }

}

export default ViewPartiesFocus