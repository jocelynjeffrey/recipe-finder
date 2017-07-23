import { RECIPE_ACTIONS } from '../actions/recipe.actions';

const DEFAULT_STATE = {
  list: [],
  favourites: [],
  isError: false,
  errorMessage: null,
  selectedRecipe: null,
  isFavourite: false,
  apiRequestMade: false,
  clientErrorMessage: '',
};

if (localStorage.getItem("state") !== null) {
  DEFAULT_STATE.favourites = JSON.parse(localStorage.getItem("state")).favourites;
}

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {

    case RECIPE_ACTIONS.RECIPES_RECEIVED_SUCCESS:
      return {...state, list: action.payload, isError: false, apiRequestMade: true };

    case RECIPE_ACTIONS.RECIPES_RECEIVED_ERROR:
      return {...state, list: [], isError: true, errorMessage: action };

    case RECIPE_ACTIONS.SHOW_RECIPE_DETAILS:
      return {...state,
        selectedRecipe: action.payload,
        isFavourite: state.favourites.length > 0
        ? state.favourites.find(recipe => recipe.uri === action.payload.uri)
        : false
      };

    case RECIPE_ACTIONS.ADD_FAVOURITE_RECIPE:
      return {...state,
        isFavourite: state.isFavourite ? false : true,
        favourites: state.favourites.concat(action.payload)
    };

    case RECIPE_ACTIONS.REMOVE_FAVOURITE_RECIPE:
      return {...state,
        isFavourite: state.isFavourite ? false : true,
        favourites: state.favourites
        .filter(recipe => recipe.uri !== action.payload.uri)
      };

    default:
      return state;
  }
}