import React, { Component } from 'react'
import firebase from './firebase'
// I need to import firebase, yeah?

class CreatePartyAddingGuests extends Component{
    constructor(){
        super()
        this.state = {
            guestInfo:[
                {
                    guestName:'',
                    guestEmail:'',
                    guestAllergies:{}
                }
            ],
        }
    }
    componentDidMount(){
        const dbRef = firebase.database('/foldername').ref('/guest');
        dbRef.on('value', (response) => {
            const data = response.val();

            const guestArray = []
            for(let key in data){
                guestArray.push({Guests:data[key] })
            }
            //data into array / for loop / push array/ then setstate?
            //data.name/ data.email / data. allergies
            this.setState({
                guestInfo:[{
                    guestName:'',
                    guestEmail:'',
                    guestAllergies:{}
                }]
            })
        })

    }

    render(){
        return(
            <div>
                <img src={} alt=""/>
                <p>Name:{}</p>
                <p>Email:{}</p>
                <ul>
                    <li>{this.state.guestInfo.allergies}</li>
                </ul>
                {/* Button, if clicked display nothing? */}
            </div>
        )
    }
}

export default CreatePartyAddingGuests;



// firebase.database('/foldername').ref('/guest')