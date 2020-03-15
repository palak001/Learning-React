import React from 'react';
import './RecipeApp.css';
import RecipeList from './RecipeList';
import Navbar from './navbar';

class RecipeApp extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;
