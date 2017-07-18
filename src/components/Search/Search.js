import React from 'react';

import '../../App.css';
import './Search.css';

const Search = props => {
  return <div className="search-component">

    <div className="toggle-tabs">
      <a
        onClick={() => {props.showCalorieInput(false)}}
        className={` ${props.calorieTabActive ? '' : 'active'}`}>
        Search by Recipe Name</a>
      <a
        onClick={() => {props.showCalorieInput(true)}}
        className={` ${props.calorieTabActive ? 'active' : ''}`}>
        Search by Calorie Count</a>
    </div>

    <div className="form">
      <div className="search-tab">
        <label htmlFor="recipe-name">Recipe Name</label>
        <input
          value={props.nameInput}
          onChange={e => props.onNameInputChange(e.target.value)}/>
      </div>
      <div className={`calorie-tabs ${props.calorieTabActive ? 'active' : ''}`}>
        <label>
          Calories per serving
        </label>
        <input
          placeholder="from"
          className={`calorie-input ${props.calorieTabActive ? 'active' : ''}`}
          value={props.calorieLowerInput}
          type="number"
          onChange={e => props.onCaloriesLowerInputChange(e.target.value)}/>
        <input
          placeholder="to"
          className={`calorie-input ${props.calorieTabActive ? 'active' : ''}`}
          value={props.calorieUpperInput}
          type="number"
          onChange={e => props.onCaloriesUpperInputChange(e.target.value)}/>
      </div>
      <button
      disabled={ props.calorieTabActive
        ? props.calorieLowerInput.length === 0 || props.calorieUpperInput.length === 0 || props.nameInput.length < 2
        : !props.nameInput || props.nameInput.length < 2
      }
      onClick={ () => {
        props.calorieTabActive
        ? props.getRecipeByCalories(props.inputValues)
        : props.getRecipeByName(props.nameInput)
      }
    }>Search</button>
    </div>

  </div>
};

export default Search;