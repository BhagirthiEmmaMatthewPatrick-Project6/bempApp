import React, { Component } from 'react'
import firebase from 'firebase'

class ViewGuestsFocus extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            photoURL:'',
        }
    }

    syncGuests=()=>{
        firebase.database().ref('/Guests/'+this.props.match.params.id).on('value',(results)=>{
            console.log(results.val());
            // const guests = []
            // const data = results.val()
            // for (let key in data){
            //     guests.push({guestInfo: data[key], guestID : key})
            // }
            // this.setState({
            //     guests
            // })   
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
            <section className="viewGuestFocusSection">
                <h2>This is working</h2>
                <p>{this.props.match.params.id}</p>
            </section>
        )
    }

}

export default ViewGuestsFocus