export const FETCH_RECIPE = 'FETCH_RECIPE';
export const SET_RECIPE = 'SET_RECIPE';

export const fetchRecipe = id => ({
  type: FETCH_RECIPE,
  payload: id,
});

export const setRecipe = recipe => ({
  type: SET_RECIPE,
  payload: recipe
});