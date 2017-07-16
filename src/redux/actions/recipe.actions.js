export const RECIPE_ACTIONS = {
  // user actions
  GET_RECIPES_BY_NAME: 'GET_RECIPES_BY_NAME',
  SHOW_RECIPE_DETAILS: 'SHOW_RECIPE_DETAILS',
  TEXT_INPUT_CHANGE: 'TEXT_INPUT_CHANGE',

  // epic actions
  RECIPES_RECEIVED_SUCCESS: 'RECIPES_RECEIVED_SUCCESS',
  RECIPES_RECEIVED_ERROR: 'RECIPES_RECEIVED_ERROR',
};

export const getRecipeByName = ingredient => ({
  type: RECIPE_ACTIONS.GET_RECIPES_BY_NAME,
  payload: ingredient,
});

export const onTextInputChange = value => ({
  type: RECIPE_ACTIONS.TEXT_INPUT_CHANGE,
  payload: value,
});

export const showRecipeDetails = recipe => ({
  type: RECIPE_ACTIONS.SHOW_RECIPE_DETAILS,
  payload: recipe,
});