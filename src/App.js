import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getRecipeByName, onTextInputChange, showRecipeDetails } from './redux/actions/recipe.actions'

const SearchComponent = props => (
  <div className="search-component">
    <input
      value={props.textInput}
      onChange={e => props.onTextInputChange(e.target.value)}
    />
    <button onClick={ () => {props.getRecipeByName(props.textInput)} }>Search</button>
  </div>
);

const Details = props => {
  if (props.selectedRecipe) {
    return <div className="details-component">
      <h2>{props.selectedRecipe.label}</h2>
      <img src={props.selectedRecipe.image} />
      <ul>
        {props.selectedRecipe.ingredients.map(ingredient =>
            <li>{ingredient.text}</li>
          )}
      </ul>
    </div>
  }
  return <p>select a recipe</p>

}

const ResultsList = props => (
  <div className="results-component">
    {props.recipeList.map(recipe =>
      <button
      className='result'
      key={recipe.uri}
      onClick={ () => { props.showRecipeDetails(recipe) } }>
        <h3>{recipe.label} </h3>
      </button>
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
    textInput: state.inputChange.textInput,
    recipeList: state.recipe.list,
    selectedRecipe: state.recipe.selectedRecipe,
  }
}

const actions = {
  onTextInputChange,
  getRecipeByName,
  showRecipeDetails,
}

export default connect(
  mapStateToProps,
  actions
)(App);