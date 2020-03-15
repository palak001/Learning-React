import React, { Component } from 'react';
import './navbar.css';


class Navbar extends Component {
    render () {
        return (
            <nav>
                <ul className="nav-title">
                    <li className="nav-heading">Recipe</li> 
                    <li className="nav-heading">New Recipe</li>
                    <li className="nav-heading">Contact</li>
                    <li className="nav-heading">About</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;