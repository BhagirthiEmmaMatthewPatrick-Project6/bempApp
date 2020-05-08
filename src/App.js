import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import './App.scss';
import Home from './components/Home';
import CreateGuest from './components/CreateGuest';
import CreateParty from './components/CreateParty'
import ViewGuests from './components/ViewGuests'
import ViewGuestsFocus from './components/ViewGuestsFocus';
import ViewParties from './components/ViewParties'
import ViewPartiesFocus from './components/ViewPartiesFocus'
// import CreatePartyAddingGuests from './components/CreatePartyAddingGuests'
// import FocusGuest from './components/FocusGuest';

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }
  render(){
    return (
      <Router>
      {/* <CreatePartyAddingGuests /> */}
        <div className="App">
          {/* Navigation */}
          <nav>
            <NavLink exact className="link" activeClassName="" to="/home">
              Home
            </NavLink>

            <NavLink exact className="link" activeClassName="" to="/createGuest">
              Create Guest
            </NavLink>

            <NavLink className="link" activeClassName="" to="/createParty">
              Create Party{/* This is the API call */}{/* <Recipe /> */}
            </NavLink>

            <NavLink className="link" activeClassName="" to="/viewParties">
              View Party
            </NavLink>

            <NavLink className="link" activeClassName="" to="/guests">
              View Guests
            </NavLink>
          </nav>
          
          {/* Routes */}
          <Route path="/Home" component={Home} />
          <Route path="/createGuest" component={CreateGuest} />
          {/* <Route path="/about" component={CreateParty} /> */}
          <Route exact path="/guests" component={ViewGuests}/>
          <Route path="/guests/:id" component={ViewGuestsFocus}/>

          <Route path="/createParty" component={CreateParty} />
          {/* <Route exact path="/guests:id" component={FocusGuest}/> */}
          <Route exact path="/viewParties" component={ViewParties}/>
          <Route path="/viewParties/:id" component={ViewPartiesFocus}/>

        </div>
      </Router>
    );
  }  
}

export default App;
