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

    syncGuests=()=>{
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


    focusUser=(e)=>{
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
                            <Link className='viewLILink' key={'link'+guest.guestID} to={'/guests/'+guest.guestID}>
                            <li key={guest.guestID} className='viewLI' id={guest.guestID} onClick={(e)=>this.focusUser(e)}>
                                <div className="imageContainer">
                                    <img src={guest.guestInfo.photoURL} alt={'Profile pic of '+guest.guestInfo.name}/>
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