import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './navbar.css';


class Navbar extends Component {
    static defaultProps = {
        onNewRecipe(){}
    }
    static propTypes = {
        onNewRecipe : PropTypes.func
    }

    render () {
        return (
            <nav>
                <ul className="nav-title">
                    <li className="nav-heading"><a href="#">Recipe</a></li> 
                    <li className="nav-heading" ><a href="#" onClick = {this.props.onNewRecipe}>New Recipe</a></li>
                    <li className="nav-heading"><a href="#">Contact</a></li>
                    <li className="nav-heading"><a href="#">About</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;