import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

class MobileMenu extends Component {
    constructor(){
        super();
        this.state = {
            isSidebarOpen: false
        }
    }

    handleMenuButtonClick = () => {
        this.setState({
            isSidebarOpen: ! this.state.isSidebarOpen
        })
    }

    render(){
        // Object Destructuring to pull out the variable from it
        const { isSidebarOpen } = this.state;

        return(
            <div className="menuContainer">
                <div className="menuButton" onClick={this.handleMenuButtonClick}>
                    <i className="fas fa-bars"></i>
                </div>

                {/* Sidebar */}                
                <div className={`nav ${isSidebarOpen ? 'show' : 'hide'}`}>
                    <div 
                        className="close" 
                        onClick={this.handleMenuButtonClick}
                    >
                        <i className="fas fa-times"></i>
                    </div>
                    <ul className="menuItems">
                        <li>
                            <NavLink
                                exact
                                className="menuLink"
                                activeClassName="currentPage"
                                to="/bempApp/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                exact
                                className="menuLink"
                                activeClassName="currentPage"
                                to="/bempApp/createGuest"
                            >
                                Create Guest
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="menuLink"
                                activeClassName="currentPage"
                                to="/bempApp/createParty"
                            >
                                Create Party{/* This is the API call */}
                                {/* <Recipe /> */}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="menuLink"
                                activeClassName="currentPage"
                                to="/bempApp/viewParties"
                            >
                                View Parties
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="menuLink"
                                activeClassName="currentPage"
                                to="/bempApp/guests"
                            >
                                View Guests
                            </NavLink>
                        </li>
                    </ul>
                </div>            
            </div>
        )
    }
}

export default MobileMenu;