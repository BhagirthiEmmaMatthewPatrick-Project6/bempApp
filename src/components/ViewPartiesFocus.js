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
        return(
            <section className="viewPartiesFocusSection">
                <div className="imageContainer">
                    <img src={this.state.focusedParty.photoURL} alt={this.state.focusedParty.partyDetails}/>
                </div>
                <h2>{this.state.focusedParty.partyName}</h2>
                <p>{this.state.focusedParty.partyDetails}</p>

                <div className="restrictionsList">
                    <h3>Warning! Be careful of the following:</h3>
                    <ul className="dietListFocusUL">
                        {this.state.focusedParty.dietList.map((diet)=>{
                            return <li className="dietFocusLI">{diet}</li>
                        })}
                    </ul>

                    <ul className="intoleranceListFocusUL">
                        {this.state.focusedParty.intoleranceList.map((intolerance)=>{
                            return <li className="intoleranceFocusLI">{intolerance}</li>
                        })}
                    </ul>
                </div>
            </section>
        )
    }

}

export default ViewPartiesFocus