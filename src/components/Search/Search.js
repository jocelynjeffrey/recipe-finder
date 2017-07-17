import React from 'react';
import '../../App.css';

const Search = props => (
  <div className="search-component">
<h2>use this one</h2>
    <input
      value={props.nameInput}
      onChange={e => props.onNameInputChange(e.target.value)}
    />
    <input
      value={props.calorieLowerInput}
      onChange={e => props.onCaloriesLowerInputChange(e.target.value)}
    />
    <input
      value={props.calorieUpperInput}
      onChange={e => props.onCaloriesUpperInputChange(e.target.value)}
    />
    <button onClick={ () => {
      props.getRecipeByCalories(props.inputValues)
      // console.log(props.inputValues)
    }}>use this</button>

    <div className="toggle-tabs">
      <a>Search by Recipe Name</a>
      <a>Search by Calorie Count</a>
    </div>
    <input
      value={props.textInput}
      onChange={e => props.onTextInputChange(e.target.value)}
    />

    <button onClick={ () => {
      props.getRecipeByCalories
      ? props.getRecipeByCalories(props.textInput)
      : props.getRecipeByName(props.textInput)
    }}>Search</button>
  </div>
);

export default Search;