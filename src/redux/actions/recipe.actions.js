export const RECIPE_ACTIONS = {
  // user actions
  GET_RECIPES_BY_NAME: 'GET_RECIPES_BY_NAME',
  SHOW_RECIPE_DETAILS: 'SHOW_RECIPE_DETAILS',
  TEXT_INPUT_CHANGE: 'TEXT_INPUT_CHANGE',
  ADD_FAVOURITE_RECIPE: 'ADD_FAVOURITE_RECIPE',
  REMOVE_FAVOURITE_RECIPE: 'REMOVE_FAVOURITE_RECIPE',

  // epic actions
  RECIPES_RECEIVED_SUCCESS: 'RECIPES_RECEIVED_SUCCESS',
  RECIPES_RECEIVED_ERROR: 'RECIPES_RECEIVED_ERROR',
};

export const getRecipeByName = ingredient => ({
  type: RECIPE_ACTIONS.GET_RECIPES_BY_NAME,
  payload: ingredient,
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

export const showRecipeDetails = recipe => ({
  type: RECIPE_ACTIONS.SHOW_RECIPE_DETAILS,
  payload: recipe,
});