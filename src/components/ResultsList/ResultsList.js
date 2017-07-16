import React from 'react';
import '../../App.css';

const ResultsList = props => {
  { if (props.recipeList.length === 0) return null; }
  return <div className="results-component">
    <h2>Select a Recipe</h2>
    {props.recipeList.map(recipe =>
      <button
      className='btn'
      key={recipe.uri}
      onClick={ () => { props.showRecipeDetails(recipe) } }>
        {recipe.label}
      </button>
    )}
  </div>
};


export default ResultsList;
