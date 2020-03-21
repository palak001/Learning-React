import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './revealButton.css';

class RevealButton extends Component {

    static propTypes = {
        leftChances: PropTypes.number.isRequired,
        onClick: PropTypes.func.isRequired,
    }
    render () {
        return(
            <p class="reveal" onClick={this.props.onClick}>Reveal <br />({this.props.leftChances} Chances Left)</p>
        );
    }
}

export default RevealButton;