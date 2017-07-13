import { RECIPES_RECEIVED_SUCCESS, RECIPES_RECEIVED_ERROR, SHOW_RECIPE_DETAILS } from '../actions/recipe.actions';

const DEFAULT_STATE = {
  list: [],
  isError: false,
  selectedRecipe: null,
};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {

    case RECIPES_RECEIVED_SUCCESS:
      return {...state, list: action.payload, isError: false };

    case RECIPES_RECEIVED_ERROR:
      return {...state, list: [], isError: true };

    case SHOW_RECIPE_DETAILS:
      return {...state, selectedRecipe: action.payload };

    default:
      return state;
  }
}