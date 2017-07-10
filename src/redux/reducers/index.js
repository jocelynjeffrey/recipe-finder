import { combineReducers } from 'redux';

import { FETCH_RECIPE } from '../actions/recipe.actions';

const recipes = (state ='', action) => {
  if (action.type === FETCH_RECIPE) {
    return action.payload;
  }
  return state;
}

export default combineReducers({
  recipes
});