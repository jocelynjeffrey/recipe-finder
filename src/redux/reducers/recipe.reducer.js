import { RECIPE_ACTIONS } from '../actions/recipe.actions';

const DEFAULT_STATE = {
  list: [],
  isError: false,
  errorMessage: null,
  selectedRecipe: null,
};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {

    case RECIPE_ACTIONS.RECIPES_RECEIVED_SUCCESS:
      return {...state, list: action.payload, isError: false };

    case RECIPE_ACTIONS.RECIPES_RECEIVED_ERROR:
      return {...state, list: [], isError: true, errorMessage: action };

    case RECIPE_ACTIONS.SHOW_RECIPE_DETAILS:
      return {...state, selectedRecipe: action.payload };

    default:
      return state;
  }
}