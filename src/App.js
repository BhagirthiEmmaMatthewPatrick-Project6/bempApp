import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import './App.scss';
import CreateGuest from './components/CreateGuest';

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }
  render(){
    return (
      <Router>
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
            <NavLink className="link" activeClassName="" to="/">
              Create Party
            </NavLink>
            <NavLink className="link" activeClassName="" to="/contact">
              View Party
            </NavLink>
            <NavLink className="link" activeClassName="" to="/contact">
              View Guests
            </NavLink>
          </nav>
          {/* Routes */}
          <Route path="/createGuest" component={CreateGuest} />
          {/* <Route path="/about" component={CreateParty} />
          <Route exact path="/" component={ViewGuest} />
          <Route exact path="/" component={ViewParty} /> */}
          <main>
            <h1>Love In the Time of Allergies</h1>
            <p>Love having friends over that have dietary restrictions, but hate it when you accidentally send them to the hospital out of negligence? If you answered yes, then you're in the right place. Here you are able to create wonderful parties that put your guests food allergies first.</p>
          </main>
        </div>
      </Router>
    );
  }  
}

export default App;
