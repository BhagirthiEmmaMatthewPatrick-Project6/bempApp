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
              activeClassName="currentPage"
              to="/home"
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

            <NavLink className="link" activeClassName="currentPage" to="/">
              View Party
            </NavLink>

            <NavLink
              className="link"
              activeClassName="currentPage"
              to="/guests"
            >
              View Guests
            </NavLink>
          </nav>

          {/* Routes */}
          <Route path="/Home" component={Home} />
          <Route path="/createGuest" component={CreateGuest} />
          {/* <Route path="/about" component={CreateParty} /> */}
          <Route path="/guests" component={ViewGuests} />
          {/* Not making it exact so we can overlap guest ID Info  */}
          <Route path="/guests/:id" component={ViewGuestsFocus} />
          <Route path="/createParty" component={CreateParty} />
          {/* <Route exact path="/guests:id" component={FocusGuest}/> */}
          {/* <Route exact path="/" component={ViewParty} /> */}
        </div>
      </Router>
    );
  }  
}

export default App;
