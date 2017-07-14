import React from 'react';
import '../../App.css';

const Search = props => (
  <div className="search-component">
    <input
      value={props.textInput}
      onChange={e => props.onTextInputChange(e.target.value)}
    />
    <button onClick={ () => {props.getRecipeByName(props.textInput)} }>Search</button>
  </div>
);

export default Search;