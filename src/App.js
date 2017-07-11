import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import { getRecipeByName, onTextInputChange } from './redux/actions/recipe.actions'

const SearchComponent = props => (
  <div className="search-component">
    <input
      value={props.textInput}
      onChange={e => props.inputChange(e.target.value)}
    />
    <button onClick={ () => {props.getRecipeByName(props.textInput)} }>Search</button>
  </div>
);

const Details = props => (
  <div className="details-component">
    'hey'
  </div>
);

const ResultsList = props => (
  <div className="results-component">
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
    <div className="App-body">
      <SearchComponent {...props} />
      <ResultsList {...props} />
      <Details {...props} />
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