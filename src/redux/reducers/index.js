import { combineReducers } from 'redux';
import { RECIPES_RECEIVED_SUCCESS, TEXT_INPUT_CHANGE, SHOW_RECIPE_DETAILS } from '../actions/recipe.actions';

const DEFAULT_STATE = {
  list: [],
  isError: false,
  selectedRecipe: null,
};

const textInput = (state = '', action) => {
  if (action.type === TEXT_INPUT_CHANGE) {
    return action.payload;
  }

  return state;
}

const selectedRecipeDetails = (state = DEFAULT_STATE, action) => {
  if (action.type === SHOW_RECIPE_DETAILS) {
    console.log(action.payload)
    return {...state, selectedRecipe: action.payload};
  }

  return state;
}

const returnedRecipes = (state = DEFAULT_STATE, action) => {
  if (action.type === RECIPES_RECEIVED_SUCCESS) {
    return {...state, list: action.payload};
  }

    return state;
}

export default combineReducers({
  returnedRecipes,
  textInput,
  selectedRecipeDetails,
});