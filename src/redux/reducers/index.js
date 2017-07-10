import { combineReducers } from 'redux';

import { RECIPES_RECEIVED_SUCCESS } from '../actions/recipe.actions';

const DEFAULT_STATE = {
  list: [],
  isError: false
};

const returnedRecipes = (state = DEFAULT_STATE, action) => {
  if (action.type === RECIPES_RECEIVED_SUCCESS) {
    console.log('got that food')
    console.log(action.payload)
    return {...state, list: action.payload};
  }

    return state;
}

export default combineReducers({
  returnedRecipes,
});