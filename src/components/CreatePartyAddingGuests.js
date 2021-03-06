import React, { Component } from 'react';
import firebase from 'firebase';
import add from '../assets/add.svg';

class CreatePartyAddingGuests extends Component{
    constructor(){
        super()
        this.state = {
            guest:[]
        }
    }
    componentDidMount(){ //Get data from firebase - list of guests who are already save onto the database
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
        })

    }

    render(){ // Creates an LI for each guest already created - onClick will get the key and return it to the parent
        return(
            <ul className="viewUL">
                {this.state.guest.map((guest, i)=>{
                    return (
                        <div className="viewLIContainer" key={i}>
                            <li className="viewLI" key={'cpag_'+guest.guestID} onClick={()=>this.props.getChoice(guest.guestID)} id={guest.guestID}>
                                <div className="imageContainer profileImage" >
                                    {/* add by The Icon Z from the Noun Project */}
                                    <span aria-label="add"><img className="add" src={add} alt="" /></span>
                                    <img className="guestImg" src={guest.guestInfo.photoURL} alt={guest.guestInfo.name}/>
                                </div>
                                <p className="guestName">{guest.guestInfo.name}</p>
                                <p>{guest.guestInfo.email}</p>
                            </li>
                        </div>
                    )
                })}
            </ul>
        )
    }
}

export default CreatePartyAddingGuests;
