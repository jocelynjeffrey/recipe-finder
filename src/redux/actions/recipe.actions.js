export const RECIPE_ACTIONS = {
  // user actions
  GET_RECIPES_BY_NAME: 'GET_RECIPES_BY_NAME',
  SHOW_RECIPE_DETAILS: 'SHOW_RECIPE_DETAILS',
  TEXT_INPUT_CHANGE: 'TEXT_INPUT_CHANGE',
  ADD_FAVOURITE_RECIPE: 'ADD_FAVOURITE_RECIPE',
  REMOVE_FAVOURITE_RECIPE: 'REMOVE_FAVOURITE_RECIPE',
  GET_RECIPES_BY_CALORIES: 'GET_RECIPES_BY_CALORIES',
  CALORIES_UPPER_INPUT_CHANGE: 'CALORIES_UPPER_INPUT_CHANGE',
  CALORIES_LOWER_INPUT_CHANGE: 'CALORIES_LOWER_INPUT_CHANGE',
  NAME_INPUT_CHANGE: 'NAME_INPUT_CHANGE',

  // epic actions
  RECIPES_RECEIVED_SUCCESS: 'RECIPES_RECEIVED_SUCCESS',
  RECIPES_RECEIVED_ERROR: 'RECIPES_RECEIVED_ERROR',
};

export const getRecipeByName = ingredient => ({
  type: RECIPE_ACTIONS.GET_RECIPES_BY_NAME,
  payload: ingredient,
});

export const getRecipeByCalories = recipeParams => ({
  type: RECIPE_ACTIONS.GET_RECIPES_BY_CALORIES,
  payload: {nameInput: recipeParams.nameInput, calLower: recipeParams.calorieLowerInput, calUpper: recipeParams.calorieUpperInput},
});

export const addFavouriteRecipe = recipe => ({
  type: RECIPE_ACTIONS.ADD_FAVOURITE_RECIPE,
  payload: recipe
});

export const removeFavouriteRecipe = recipe => ({
  type: RECIPE_ACTIONS.REMOVE_FAVOURITE_RECIPE,
  payload: recipe
});

export const onTextInputChange = value => ({
  type: RECIPE_ACTIONS.TEXT_INPUT_CHANGE,
  payload: value,
});

export const onNameInputChange = value => ({
  type: RECIPE_ACTIONS.NAME_INPUT_CHANGE,
  payload: value,
});

export const onCaloriesLowerInputChange = value => ({
  type: RECIPE_ACTIONS.CALORIES_LOWER_INPUT_CHANGE,
  payload: value,
});

export const onCaloriesUpperInputChange = value => ({
  type: RECIPE_ACTIONS.CALORIES_UPPER_INPUT_CHANGE,
  payload: value,
});

export const showRecipeDetails = recipe => ({
  type: RECIPE_ACTIONS.SHOW_RECIPE_DETAILS,
  payload: recipe,
});
