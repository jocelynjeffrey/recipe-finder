import React from 'react';

import '../../App.css';
import './FavouritesList.css';


const FavouritesList = props => {
  { if (props.favourites.length === 0) return null; }
  return <div className="favourites-component">
    <h2>Favourites</h2>
    {props.favourites.map(recipe =>
      <button
      className='btn'
      key={recipe.uri}
      onClick={ () => { props.showRecipeDetails(recipe) } }>
        {recipe.label}
      </button>
    )}
  </div>
};


export default FavouritesList;