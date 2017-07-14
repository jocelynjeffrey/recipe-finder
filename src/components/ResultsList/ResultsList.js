import React from 'react';
import '../../App.css';

const ResultsList = props => (
  <div className="results-component">
    {props.recipeList.map(recipe =>
      <button
      className='result'
      key={recipe.uri}
      onClick={ () => { props.showRecipeDetails(recipe) } }>
        {recipe.label}
      </button>
    )}
  </div>
);

export default ResultsList;
