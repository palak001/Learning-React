import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './card.css';

class Card extends Component {
    static propTypes = {
        backgroundColor: PropTypes.string.isRequired,
        showing: PropTypes.bool.isRequired,
        onClick: PropTypes.func.isRequired,
    }
    render () {
        let style = {};
        if(this.props.showing) {
            style.backgroundColor = this.props.backgroundColor
        }
        return (
            <div className="card" style={style} onClick={this.props.onClick}></div>
        );
    }
}

export default Card;