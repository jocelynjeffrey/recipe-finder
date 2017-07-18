import { combineReducers } from 'redux';
import recipeReducer from './recipe.reducer'
import inputValues from './input.reducer'

export default combineReducers({
  recipe: recipeReducer,
  inputValues,
});