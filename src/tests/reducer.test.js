import inputReducer from '../redux/reducers/input.reducer.js';
import recipeReducer from '../redux/reducers/recipe.reducer.js';

describe('inputReducer', () => {
  it('should return the initial state', () => {
    expect(inputReducer(undefined, {})).toEqual({
      textInput: '',
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
});