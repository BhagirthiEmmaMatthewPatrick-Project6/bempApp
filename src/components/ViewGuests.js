import React, { Component } from 'react'
import firebase from 'firebase'
import {Link} from 'react-router-dom'

class ViewGuests extends Component{
    constructor(){
        super();
        this.state={
            guests:[
                {
                    guestInfo:{
                        name:'',
                        email:'',
                        photoURL:'',
                    },
                },
            ],
            focusedUser: 'key'
        }
    }

    syncGuests=()=>{ //Get the gets from the database and save it to state
        firebase.database().ref('/Guests').on('value',(results)=>{
            const guests = []
            const data = results.val()
            for (let key in data){
                guests.push({guestInfo: data[key], guestID : key})
            }
            this.setState({
                guests
            })   
        })
    }

    componentDidMount(){
        this.syncGuests();
    }


    focusUser=(e)=>{ //onClick, gets the profile of the guest the user is trying to access --> sends to child viewguestsfocus.js
        this.setState({
            focusedUser: e.target.id
        })
    }

    render(){
        return(
            <section className="viewSection wrapper">
                <h2>Guest List</h2>
                <ul className="viewUL">
                    {this.state.guests.map((guest)=>{
                        return(
                            <Link className='viewLILink' key={'link'+guest.guestID} to={'/bempApp/guests/'+guest.guestID}>
                            <li key={guest.guestID} className='viewLI' id={guest.guestID} onClick={(e)=>this.focusUser(e)}>
                                <div className="imageContainer profileImage">
                                    <img className="guestImg" src={guest.guestInfo.photoURL} alt={'Profile pic of '+guest.guestInfo.name}/>
                                </div>
                                <h3>{guest.guestInfo.name}</h3>
                            </li>
                            </Link>
                        )
                    })}
                </ul>
            </section>
        )
    }

}

export default ViewGuests