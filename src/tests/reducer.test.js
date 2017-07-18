import inputReducer from '../redux/reducers/input.reducer.js';
import recipeReducer from '../redux/reducers/recipe.reducer.js';

const mockRecipeState = {
  list: [],
  favourites: [],
  isError: false,
  errorMessage: null,
  selectedRecipe: null,
  isFavourite: false,
}

const mockInputState = {
  nameInput: '',
  calorieLowerInput: '',
  calorieUpperInput: '',
  calorieTabActive: false,
}

describe('inputReducer', () => {
  it('should return the initial state', () => {
    expect(inputReducer(undefined, {})).toEqual({
      ...mockInputState,
      nameInput: '',
    });
  });

  it('should react to action NAME_INPUT_CHANGE', () => {
    const string = 'pumpkin pie';
    expect(inputReducer(undefined, {
      type: 'NAME_INPUT_CHANGE',
      payload: string,
    })).toEqual({
      ...mockInputState,
      nameInput: string,
    });
  });
});

describe('recipeReducer', () => {
  it('should return the initial state', () => {
    expect(recipeReducer(undefined, {})).toEqual(mockRecipeState);
  });

  it('should react to action RECIPES_RECEIVED_SUCCESS', () => {
    const recipes = [ {label: 'coffee', calories: 3}, {label: 'tea', calories: 2} ];
    expect(recipeReducer(undefined, {
      type: 'RECIPES_RECEIVED_SUCCESS',
      payload: recipes,
    })).toEqual({
      ...mockRecipeState,
      list: recipes,
    });
  });

  it('should react to action RECIPES_RECEIVED_ERROR', () => {
    expect(recipeReducer(undefined, {
      type: 'RECIPES_RECEIVED_ERROR',
    })).toEqual({
      ...mockRecipeState,
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
      ...mockRecipeState,
      selectedRecipe: recipe,
    });
  });
});

