import React, { Component } from 'react';
import './recipe.css';


class Recipe extends Component {
    render () {
        const {title, image, instructions} = this.props;
        // const ingredients = this.props.ingredients.map((ingr, index) => (
        //     <li key={index}>{ingr}</li>
        // ));
        //.............or.............
        const ingredients = this.props.ingredients.map((ingr, index) => {
            return(
                <li key={index}>{ingr}</li>
            )
        })
        return (
            <div className="recipe-card">
                <div className="recipe-card-image" >
                    <img src={image} alt={title} />
                </div>
                <div className="recipe-card-content">
                    <h3>Recipe {title}</h3>
                    <h3 className="recipe-title">Ingredients:</h3>
                    <ul>
                        {ingredients}
                    </ul>
                    <h3>Instructions:</h3>
                    <p>
                        {instructions}
                    </p>
                </div>
            </div>
        );
    }
}

export default Recipe;