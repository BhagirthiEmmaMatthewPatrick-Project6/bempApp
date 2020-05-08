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
            <ul className="viewUL">
                {this.state.guest.map((guest)=>{
                    return (
                        <div className="viewLIContainer">
                            <li classname="viewLI" key={'cpag_'+guest.guestID} onClick={()=>this.props.getChoice(guest.guestID)} id={guest.guestID}>
                                <div className="imageContainer">
                                    <img src={guest.guestInfo.photoURL} alt={`Photo of ${guest.guestInfo.name}`}/>
                                </div>
                                <p>{guest.guestInfo.name}</p>
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
