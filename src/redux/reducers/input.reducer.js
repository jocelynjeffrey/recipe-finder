import { RECIPE_ACTIONS } from '../actions/recipe.actions';

const DEFAULT_STATE = {
  textInput: '',
  nameInput: '',
  calorieLowerInput: '',
  calorieUpperInput: '',
};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case RECIPE_ACTIONS.TEXT_INPUT_CHANGE:
      return {...state, textInput: action.payload };

    case RECIPE_ACTIONS.NAME_INPUT_CHANGE:
      return {...state, nameInput: action.payload };

    case RECIPE_ACTIONS.CALORIES_LOWER_INPUT_CHANGE:
      return {...state, calorieLowerInput: action.payload };

    case RECIPE_ACTIONS.CALORIES_UPPER_INPUT_CHANGE:
      return {...state, calorieUpperInput: action.payload };

    default:
      return state;
  }
}