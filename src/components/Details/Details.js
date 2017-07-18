import React from 'react';
import LikeButton from '../LikeButton';

import '../../App.css';
import './Details.css';

const Details = props => {
  if (props.selectedRecipe) {
    return <div className="details-component">
    <LikeButton {...props} />
      <h2>{props.selectedRecipe.label}</h2>
      <img src={props.selectedRecipe.image} />
      <h3>Ingredients</h3>
      <ul>
        {props.selectedRecipe.ingredients.map((ingredient, i) =>
            <li key={i}>{ingredient.text}</li>
          )}
      </ul>
      <h3>Calories</h3>
      <span>{Math.round(props.selectedRecipe.calories)}</span>
      <h3>Source</h3>
      <span>{props.selectedRecipe.source}</span>
      <a className="btn" target="_blank" href={props.selectedRecipe.url}>Go to Instructions</a>
    </div>
  }
  return null
}

export default Details;
