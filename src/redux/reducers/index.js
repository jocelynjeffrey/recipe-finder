import { combineReducers } from 'redux';
import recipeReducer, { textInput, selectedRecipeDetails } from './recipe.reducer'

export default combineReducers({
  returnedRecipes: recipeReducer,
  textInput,
  selectedRecipeDetails,
});