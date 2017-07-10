export const GET_RECIPES_BY_NAME = 'GET_RECIPES_BY_NAME';
export const RECIPES_RECEIVED_SUCCESS = 'RECIPES_RECEIVED_SUCCESS';

export const getRecipeByName = recipeName => ({
  type: GET_RECIPES_BY_NAME,
  payload: recipeName,
});

