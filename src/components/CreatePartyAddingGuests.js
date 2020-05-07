import React, { Component } from 'react'
import firebase from 'firebase'

class CreatePartyAddingGuests extends Component{
    constructor(){
        super()
        this.state = {
            guest:[]
        }
    }
    componentDidMount(){
        const dbRef = firebase.database().ref('/Guests');
        dbRef.on('value', (response) => {

            const data = response.val();
            const guest = []
            for (let key in data){
                guest.push({ guestInfo: data[key], guestID: key })
            }
            this.setState({
                guest
            })
            console.log(this.state.guestID);
        })

    }

    render(){
        return(
            <ul className="wrapper">
                {this.state.guest.map((guest)=>{
                    return (    
                        <li key={'cpag_'+guest.guestID} onClick={(e)=>this.props.getChoice(e)} id={guest.guestID} className="child">
                            <p id={guest.guestID} className="child">Name:{guest.guestInfo.name}</p>
                            <p id={guest.guestID} className="child">Email:{guest.guestInfo.email}</p>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default CreatePartyAddingGuests;
