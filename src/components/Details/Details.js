import React from 'react';
import '../../App.css';

const Details = props => {
  if (props.selectedRecipe) {
    return <div className="details-component">
      <h2>{props.selectedRecipe.label}</h2>
      <img src={props.selectedRecipe.image} />
      <h3>Ingredients</h3>
      <ul>
        {props.selectedRecipe.ingredients.map(ingredient =>
            <li>{ingredient.text}</li>
          )}
      </ul>
    </div>
  }
  return <span></span>
}

export default Details;
