import React, { Component } from 'react'
import firebase from 'firebase'

class ViewGuestsFocus extends Component{
    constructor(){
        super();
        this.state={
            focusedUser:{
                name:'',
                email:'',                   
                photoURL:'',
            }
        }
    }

    syncGuests=()=>{
        firebase.database().ref('/Guests/'+this.props.match.params.id).on('value',(results)=>{
            console.log(results.val());
            this.setState({
                focusedUser: results.val()
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
            <section className="viewGuestFocusSection">
                <h2>{this.state.focusedUser.name}</h2>
                <p>{this.state.focusedUser.email}</p>
            </section>
        )
    }

}

export default ViewGuestsFocus