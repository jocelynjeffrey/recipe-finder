import React from 'react';
import './App.css';
import Search from './components/Search';
import Details from './components/Details';
import Warning from './components/Warning';
import ResultsList from './components/ResultsList';
import { connect } from 'react-redux';
import { getRecipeByName, onTextInputChange, showRecipeDetails, addFavouriteRecipe, removeFavouriteRecipe } from './redux/actions/recipe.actions'

export const App = props => (
  <div className="App">
    <div className="App-header">
      <h1>Recipe Finder</h1>
    </div>
    <Search {...props} />
    <div className={`App-body ${props.isError ? 'hasError' : ''}`}>
      <ResultsList {...props} />
      <Details {...props} />
    </div>
    <Warning {...props} />
  </div>
);

const mapStateToProps = (state) => {
  return {
    textInput: state.inputChange.textInput,
    recipeList: state.recipe.list,
    selectedRecipe: state.recipe.selectedRecipe,
    isError: state.recipe.isError,
    favourites: state.recipe.favourites,
    isFavourite: state.recipe.isFavourite
  }
}

const actions = {
  onTextInputChange,
  getRecipeByName,
  showRecipeDetails,
  addFavouriteRecipe,
  removeFavouriteRecipe,
}

export default connect(
  mapStateToProps,
  actions
)(App);