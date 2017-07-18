import React from 'react';
import FavouritesList from '../FavouritesList';

import '../../App.css';
import './ResultsList.css';


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
    <FavouritesList {...props} />
  </div>
};

export default ResultsList;
