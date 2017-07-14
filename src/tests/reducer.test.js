import inputReducer from '../redux/reducers/input.reducer.js';
import recipeReducer from '../redux/reducers/recipe.reducer.js';

describe('inputReducer', () => {
  it('should return the initial state', () => {
    expect(inputReducer(undefined, {})).toEqual({
      textInput: '',
    });
  });

  it('should react to action TEXT_INPUT_CHANGE', () => {
    const string = 'pumpkin pie';
    expect(inputReducer(undefined, {
      type: 'TEXT_INPUT_CHANGE',
      payload: string,
    })).toEqual({
      textInput: string,
    });
  });
});

describe('recipeReducer', () => {
  it('should return the initial state', () => {
    expect(recipeReducer(undefined, {})).toEqual({
      list: [],
      isError: false,
      selectedRecipe: null,
    });
  });

  it('should react to action RECIPES_RECEIVED_SUCCESS', () => {
    const recipes = [ {label: 'coffee', calories: 3}, {label: 'tea', calories: 2} ];
    expect(recipeReducer(undefined, {
      type: 'RECIPES_RECEIVED_SUCCESS',
      payload: recipes,
    })).toEqual({
      list: recipes,
      isError: false,
      selectedRecipe: null,
    });
  });

  it('should react to action RECIPES_RECEIVED_ERROR', () => {
    expect(recipeReducer(undefined, {
      type: 'RECIPES_RECEIVED_ERROR',
    })).toEqual({
      list: [],
      isError: true,
      selectedRecipe: null,
    });
  });

  it('should react to action SHOW_RECIPE_DETAILS', () => {
    const recipe = {label: 'coffee', calories: 3};
    expect(recipeReducer(undefined, {
      type: 'SHOW_RECIPE_DETAILS',
      payload: recipe,
    })).toEqual({
      list: [],
      isError: false,
      selectedRecipe: recipe,
    });
  });
});

