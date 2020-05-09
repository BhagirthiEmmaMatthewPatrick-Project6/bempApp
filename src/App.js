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
              <div className="wrapper">
              <NavLink
                exact
                className="link"
                activeClassName="currentPage"
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                exact
                className="link"
                activeClassName="currentPage"
                to="/createGuest"
              >
                Create Guest
              </NavLink>

              <NavLink
                className="link"
                activeClassName="currentPage"
                to="/createParty"
              >
                Create Party{/* This is the API call */}
                {/* <Recipe /> */}
              </NavLink>

              <NavLink className="link" activeClassName="currentPage" to="/viewParties">
                View Parties
              </NavLink>

              <NavLink
                className="link"
                activeClassName="currentPage"
                to="/guests"
              >
                View Guests
              </NavLink>
              </div>
            </nav>

            {/* Routes */}
            <Route exact path="/" component={Home} />

            <Route path="/createGuest" component={CreateGuest} />

            <Route path="/createParty" component={CreateParty} />

            <Route exact path="/guests" component={ViewGuests} />
            <Route path="/guests/:id" component={ViewGuestsFocus} />

            <Route exact path="/viewParties" component={ViewParties}/>
            <Route path="/viewParties/:id" component={ViewPartiesFocus}/>

          </div>
        </Router>
    );
  }  
}

export default App;
