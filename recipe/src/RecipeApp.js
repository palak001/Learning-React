import React from 'react';
import './RecipeApp.css';
import RecipeList from './RecipeList';
import Navbar from './navbar';
import RecipeForm from './RecipeForm';

class RecipeApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
      recipes: [
        {   
            id: 0,
            title: "Spaghetti",
            instructions: "Don't trust my recipe, instead go and google it.",
            ingredients: ["pasta", "8 cups of water", "1 box of Spaghetti"],
            image: "spaghetti.jpeg"
        },
        {
            id: 1,
            title: "Pizza",
            instructions: "Don't trust my recipe, instead go and google it.",
            ingredients: ["pasta", "8 cups of water", "1 box of Spaghetti"],
            image: "pizza.jpeg"
        },
        {
            id: 2,
            title: "Cold Coffee",
            instructions: "Don't trust my recipe, instead go and google it.",
            ingredients: ["pasta", "8 cups of water", "1 box of Spaghetti"],
            image: "coffee.jpeg"
        }
      ],
      nextRecipeId: 3,  
    }

    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId : prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    });
  }

  onDelete(id) {
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes});
  }

  render () {
    const {showForm} = this.state;
    return (
      <div>
        <Navbar onNewRecipe={() => {this.setState({showForm: true})}}/>
        {showForm ? <RecipeForm onSave={this.handleSave} onClose={() => {this.setState({showForm: false})}}/> : null}
        <RecipeList recipes={this.state.recipes} onDelete={this.onDelete}/>
      </div>
    );
  }
}

export default RecipeApp;
