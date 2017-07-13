import { combineReducers } from 'redux';
import recipeReducer from './recipe.reducer'
import inputChange from './input.reducer'

export default combineReducers({
  recipe: recipeReducer,
  inputChange,
});