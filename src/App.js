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
import MobileMenu from './components/MobileMenu';
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
          <MobileMenu />
          {/* Navigation */}
          <nav className="globalNav">
            <div className="wrapper">
              <NavLink
                exact
                className="link"
                activeClassName="currentPage"
                to="/bempApp/"
              >
                Home
              </NavLink>

              <NavLink
                exact
                className="link"
                activeClassName="currentPage"
                to="/bempApp/createGuest"
              >
                Create Guest
              </NavLink>

              <NavLink
                className="link"
                activeClassName="currentPage"
                to="/bempApp/createParty"
              >
                Create Party{/* This is the API call */}
                {/* <Recipe /> */}
              </NavLink>

              <NavLink
                className="link"
                activeClassName="currentPage"
                to="/bempApp/viewParties"
              >
                View Parties
              </NavLink>

              <NavLink
                className="link"
                activeClassName="currentPage"
                to="/bempApp/guests"
              >
                View Guests
              </NavLink>
            </div>
          </nav>

          {/* Routes */}
          <Route exact path="/bempApp/" component={Home} />

          <Route path="/bempApp/createGuest" component={CreateGuest} />

          <Route path="/bempApp/createParty" component={CreateParty} />

          <Route exact path="/bempApp/guests" component={ViewGuests} />
          <Route path="/bempApp/guests/:id" component={ViewGuestsFocus} />

          <Route exact path="/bempApp/viewParties" component={ViewParties} />
          <Route path="/bempApp/viewParties/:id" component={ViewPartiesFocus} />
        </div>
      </Router>
    );
  }  
}

export default App;
