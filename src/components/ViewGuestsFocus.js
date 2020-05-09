import React, { Component } from 'react'
import firebase from 'firebase'
import {Link} from 'react-router-dom'

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
            <section className="viewGuestFocusSection wrapper">
                <div className="profileCard">
                <Link className="link" activeClassName="currentPage" to="/guests">...go back</Link>
                    <div className="imageContainer">
                        <img src={this.state.focusedUser.photoURL} alt={this.state.focusedUser.name + ' profile picture'}/>
                    </div>
                    <h2>{this.state.focusedUser.name}</h2>
                    <p>{this.state.focusedUser.email}</p>
                </div>
            </section>
        )
    }

}

export default ViewGuestsFocus