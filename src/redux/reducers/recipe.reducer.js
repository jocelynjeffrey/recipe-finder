import { RECIPES_RECEIVED_SUCCESS, RECIPES_RECEIVED_ERROR, TEXT_INPUT_CHANGE, SHOW_RECIPE_DETAILS } from '../actions/recipe.actions';

const DEFAULT_STATE = {
  list: [],
  isError: false,
  selectedRecipe: null,
};

export const textInput = (state = '', action) => {
  if (action.type === TEXT_INPUT_CHANGE) {
    return action.payload;
  }

  return state;
}

export const selectedRecipeDetails = (state = DEFAULT_STATE, action) => {
  if (action.type === SHOW_RECIPE_DETAILS) {
    console.log(action.payload)
    return {...state, selectedRecipe: action.payload};
  }

  return state;
}

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {

    case RECIPES_RECEIVED_SUCCESS:
      return {...state, list: action.payload, isError: false };

    case RECIPES_RECEIVED_ERROR:
      return {...state, list: [], isError: true };

    default:
      return state;
  }
}