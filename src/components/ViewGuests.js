import React, { Component } from 'react'
import firebase from 'firebase'
import {Link} from 'react-router-dom'

class ViewGuests extends Component{
    constructor(){
        super();
        this.state={
            guests:[
                {
                name:'',
                email:'',
                photoURL:'',
                },//{object2},{object3} 
            ],
            focusedUser: 'key'
        }
    }

    syncGuests=()=>{
        firebase.database().ref('/guests').on('value',(results)=>{
            console.log(results);
            // this.setState({
            //     guests:results
            // })   
        })
        .catch((error)=>{
            console.log(error);
            alert(error)
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
            <section className="viewGuestsSection">
                <ul className="viewGuestsUL">
                    {this.state.guests.map((guest)=>{
                        return(
                            <Link className='viewuestsLink' activeClassName="" to={'/'+this.state.focusedUser}>
                            <li key={guest.key} className='viewGuestsLI' id={guest.key} onClick={(e)=>this.focusUser(e)}>
                                <div className="imageContainer">
                                    <img src={guest.photoURL} alt={'Profile pic of '+guest.name}/>
                                </div>
                                <h3>{guest.name}</h3>
                                <p>{guest.email}</p>
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