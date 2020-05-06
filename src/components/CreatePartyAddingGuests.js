import React, { Component } from 'react'
import firebase from 'firebase'
// I need to import firebase, yeah?

class CreatePartyAddingGuests extends Component{
    constructor(){
        super()
        this.state = {
            guest:[
                {guestInfo : {
                    guestName: '',
                    guestEmail: '',
                    guestAllergies: []
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
        })

    }

    render(){

        return(
            this.state.guest.map((guest)=>{
                return ( 
            <div>
                <p>Name:{guest.guestInfo.name}</p>
                <p>Email:{guest.guestInfo.email}</p>
                <ul>
                    {/* map over allergies */}
                    <li>{guest.guestInfo.allergies}</li>
                    {/* <li>{Guest.intolerence}</li> */}
                </ul> 
                {/* Button, if clicked display nothing? */}
            </div>
                )
            }) 
        )
    }
}

export default CreatePartyAddingGuests;
