import { RECIPE_ACTIONS } from '../actions/recipe.actions';

const DEFAULT_STATE = {
  nameInput: '',
  calorieLowerInput: '',
  calorieUpperInput: '',
  calorieTabActive: false,
};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {

    case RECIPE_ACTIONS.SHOW_CALORIE_INPUT:
      return {...state, calorieTabActive: action.payload };

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