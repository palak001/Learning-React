import React, {Component} from 'react';
import Recipe from './recipe.js';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component{
    static defaultProps = {
        recipes: [
            {
                title: "Spaghetti",
                instructions: "Don't trust my recipe, instead go and google it.",
                ingredients: ["pasta", "8 cups of water", "1 box of Spaghetti"],
                image: "spaghetti.jpeg"
            },
            {
                title: "Pizza",
                instructions: "Don't trust my recipe, instead go and google it.",
                ingredients: ["pasta", "8 cups of water", "1 box of Spaghetti"],
                image: "pizza.jpeg"
            },
            {
                title: "Cold Coffee",
                instructions: "Don't trust my recipe, instead go and google it.",
                ingredients: ["pasta", "8 cups of water", "1 box of Spaghetti"],
                image: "coffee.jpeg"
            },
        ]
    }
    static propTypes  = {
        recipes: PropTypes.arrayOf(PropTypes.object)
    }

    render () {
        const recipes = this.props.recipes.map((recipe, index) => (
            <Recipe key={index} {...recipe} />
        ));

        return (
            <div className="recipe-list">
                {recipes}
            </div>
        )
    }
}

export default RecipeList;