import React, { Component } from 'react'
import firebase from 'firebase'
import {Link} from 'react-router-dom'

class ViewParties extends Component{
    constructor(){
        super();
        this.state={
            parties:[
                {
                    
                    partyInfo:{

                        addedGuests:[],
                        dietList:[],
                        intoleranceList:[],
                        partyAddress:'',
                        partyDetails:'',
                        partyName:'',
                    }
                },
            ],
            focusedParty: 'key'
        }
    }

    syncParties=()=>{
        firebase.database().ref('/Parties').on('value',(results)=>{
            const parties = []
            const data = results.val()
            console.log(results.val());
            for (let key in data){
                parties.push({partyInfo: data[key], partyID : key})
            }            
            this.setState({
                parties
            })   
        })
    }

    componentDidMount(){
        this.syncParties();
    }


    focusUser=(e)=>{
        this.setState({
            focusedParty: e.target.id
        })
    }

    render(){
        return(
            <section className="viewSection wrapper">
                <h2>Parties</h2>
                <ul className="viewUL">
                    {this.state.parties.map((party)=>{
                        return(
                            <Link className='viewLILink' key={'link'+party.partyID} to={'/viewParties/'+party.partyID}>
                            <li key={party.partyID} className='viewLI' id={party.partyID} onClick={(e)=>this.focusUser(e)}>
                                <div className="imageContainer">
                                    <img src={party.partyInfo.photoURL} alt={party.partyInfo.partyDetails}/>
                                </div>
                                <h3>{party.partyInfo.partyName}</h3>
                                <p>{party.partyInfo.partyAddress}</p>
                                <p>{party.partyInfo.partyDetails}</p>
                            </li>
                            </Link>
                        )
                    })}
                </ul>
            </section>
        )
    }

}

export default ViewParties