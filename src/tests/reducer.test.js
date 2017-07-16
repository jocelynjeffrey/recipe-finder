import inputReducer from '../redux/reducers/input.reducer.js';
import recipeReducer from '../redux/reducers/recipe.reducer.js';

const mockInitialState = {
    isError: false,
    errorMessage: null,
    list: [],
    selectedRecipe: null,
}

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
    expect(recipeReducer(undefined, {})).toEqual(mockInitialState);
  });

  it('should react to action RECIPES_RECEIVED_SUCCESS', () => {
    const recipes = [ {label: 'coffee', calories: 3}, {label: 'tea', calories: 2} ];
    expect(recipeReducer(undefined, {
      type: 'RECIPES_RECEIVED_SUCCESS',
      payload: recipes,
    })).toEqual({
      ...mockInitialState,
      list: recipes,
    });
  });

  it('should react to action RECIPES_RECEIVED_ERROR', () => {
    expect(recipeReducer(undefined, {
      type: 'RECIPES_RECEIVED_ERROR',
    })).toEqual({
      ...mockInitialState,
      isError: true,
      errorMessage: {'type': 'RECIPES_RECEIVED_ERROR' }
    });
  });

  it('should react to action SHOW_RECIPE_DETAILS', () => {
    const recipe = {label: 'coffee', calories: 3};
    expect(recipeReducer(undefined, {
      type: 'SHOW_RECIPE_DETAILS',
      payload: recipe,
    })).toEqual({
      ...mockInitialState,
      selectedRecipe: recipe,
    });
  });
});

