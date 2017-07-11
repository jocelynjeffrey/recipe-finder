export const GET_RECIPES_BY_NAME = 'GET_RECIPES_BY_NAME';
export const RECIPES_RECEIVED_SUCCESS = 'RECIPES_RECEIVED_SUCCESS';
export const TEXT_INPUT_CHANGE = 'TEXT_INPUT_CHANGE';
export const SHOW_RECIPE_DETAILS = 'SHOW_RECIPE_DETAILS';

export const getRecipeByName = ingredient => ({
  type: GET_RECIPES_BY_NAME,
  payload: ingredient,
});

export const onTextInputChange = value => ({
  type: TEXT_INPUT_CHANGE,
  payload: value,
})

export const showRecipeDetails = recipe => ({
  type: SHOW_RECIPE_DETAILS,
  payload: recipe,
})