import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import { getRecipeByName } from './redux/actions/recipe.actions'

const App = props => (
  <div className="App">
    <div className="App-header">
      <h2>Recipe Finder</h2>
    </div>
    <p className="App-intro">
      <button onClick={ () => { props.getRecipeByName('avocado') } }>click me</button>
      {props.recipeList.map(recipe => <h3 key={recipe.uri}>name: {recipe.label} calories: {recipe.calories}</h3>)}
    </p>
  </div>
);

// export default App;

const mapStateToProps = (state) => {
  console.log(state)
  return {
    recipeList: state.returnedRecipes.list,
  }
}

const actions = {
  getRecipeByName,
}

export default connect(
  mapStateToProps,
  actions
)(App);