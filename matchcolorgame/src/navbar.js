import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './navbar.css';

class Navbar extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired
    }
    render() {
        return (
            <nav>
                <ul className="nav-title">
                    <li className="nav-heading">MEMORY GAME</li>
                    <li className="nav-heading" onClick={this.props.onClick}>New Game</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;