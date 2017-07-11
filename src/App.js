import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import { getRecipeByName, onTextInputChange } from './redux/actions/recipe.actions'

const SearchComponent = props => (
  <div>
    <input
      value={props.textInput}
      onChange={e => props.inputChange(e.target.value)}
    />
    <button onClick={ () => {props.getRecipeByName(props.textInput)} }>click me</button>
  </div>
);

const App = props => (
  <div className="App">
    <div className="App-header">
      <h2>Recipe Finder</h2>
    </div>
    <div className="App-intro">
      <SearchComponent {...props} />
      {props.recipeList.map(recipe => <h3 key={recipe.uri}>name: {recipe.label} calories: {recipe.calories}</h3>)}
    </div>
  </div>
);

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    textInput: state.textInput,
    recipeList: state.returnedRecipes.list,
  }
}

const actions = {
  inputChange: onTextInputChange,
  getRecipeByName,
}

export default connect(
  mapStateToProps,
  actions
)(App);