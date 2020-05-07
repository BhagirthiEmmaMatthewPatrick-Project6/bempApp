import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import './App.scss';
import CreateGuest from './components/CreateGuest';
import CreateParty from './components/CreateParty'
import ViewGuests from './components/ViewGuests'
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
            <NavLink
              exact
              className="link"
              activeClassName=""
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              exact
              className="link"
              activeClassName=""
              to="/createGuest"
            >
              Create Guest
            </NavLink>
            <NavLink 
              className="link" 
              activeClassName="" 
              to="/createParty"
              >
              Create Party
              {/* This is the API call */}
              {/* <CreateParty /> */}
            </NavLink>
            <NavLink className="link" activeClassName="" to="/parties">
              View Party
            </NavLink>
            <NavLink className="link" activeClassName="" to="/guests">
              View Guests
            </NavLink>
          </nav>
          {/* Routes */}
          <Route path="/createGuest" component={CreateGuest} />
          <Route path="/createParty" component={CreateParty} />
          <Route exact path="/guests" component={ViewGuests}/>
          {/* <Route exact path="/guests:id" component={FocusGuest}/> */}
          {/* <Route exact path="/" component={ViewParty} /> */}
        </div>
      </Router>
    );
  }  
}

export default App;
