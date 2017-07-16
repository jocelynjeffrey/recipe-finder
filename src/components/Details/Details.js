import React from 'react';
import '../../App.css';

const Details = props => {
  if (props.selectedRecipe) {
    return <div className="details-component">
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
      <button className="btn" href={props.selectedRecipe.url}>Go to Recipe</button>
    </div>
  }
  return null
}

export default Details;
