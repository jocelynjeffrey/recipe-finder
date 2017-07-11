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
    <button onClick={ () => {props.getRecipeByName(props.textInput)} }>Search</button>
  </div>
);

const ResultsList = props => (
  <div>
    {props.recipeList.map(recipe =>
      <div className='result' key={recipe.uri}>
        <h3>{recipe.label} </h3>
      </div>
    )}
  </div>
);

const App = props => (
  <div className="App">
    <div className="App-header">
      <h2>Recipe Finder</h2>
    </div>
    <div>
      <SearchComponent {...props} />
      <ResultsList {...props} />
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