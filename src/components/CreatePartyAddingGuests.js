import React, { Component } from 'react'
import firebase from 'firebase'
// I need to import firebase, yeah?

class CreatePartyAddingGuests extends Component{
    constructor(){
        super()
        this.state = {
            guest:[
                {
                    guestInfo : {
                        allergies: [],
                        diet:'',
                        email: '',
                        name: '',
                        petFriendly:false,
                        key:''
                }
            }],
        }
    }
    componentDidMount(){
        const dbRef = firebase.database().ref('/Guests');
        dbRef.on('value', (response) => {

            const data = response.val();
            const guest = []
            for (let key in data){
                guest.push({ guestInfo: data[key], guestID: key })
                // guest[data]['key'] = key
            }
            //data into array / for loop / push array/ then setstate?
            //data.name/ data.email / data. allergies
            this.setState({
               guest
            })
            console.log(this.state.guestID);
        })

    }

    getUserKey = (event) =>{
        // console.log(event.target.value);

        //click div to get guestID, but I get all guestIDs from database not the one I clicked
        return(
            this.state.guest.map((key)=>{
                console.log(key.guestID);
                this.setState({
                    key:event.target.id
                })
            })
        )
    }

    render(){

        return(
            this.state.guest.map((guest)=>{
                // console.log(guest);
                return ( 
            // <div onClick={(e) =>this.props.getChoice(e, this.state.guestID)}>
            <div onClick={this.getUserKey}>
                <p>Name:{guest.guestInfo.name}</p>
                <p>Email:{guest.guestInfo.email}</p>
                <p>Diet:{guest.guestInfo.diet}</p>
                <div>
                    <p>List of Allergies:</p>
                    <ul>{guest.guestInfo.allergies.map((guestAllergies)=>{
                    // console.log(guestAllergies);
                    return <li>{guestAllergies}</li>
                    })}</ul>
                </div>
            </div>
                )
            }) 
        )
    }
}

export default CreatePartyAddingGuests;
