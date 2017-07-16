import { RECIPE_ACTIONS } from '../actions/recipe.actions';

const DEFAULT_STATE = {
  textInput: '',
};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case RECIPE_ACTIONS.TEXT_INPUT_CHANGE:
      return {...state, textInput: action.payload };

    default:
      return state;
  }
}