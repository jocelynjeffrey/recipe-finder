import { FETCH_RECIPE, setRecipe } from '../actions/recipe.actions';
import { fetchRecipe } from '../api_calls/recipes'
import { combineEpics } from 'redux-observable';

import { Observable } from 'rxjs';

const fetchRecipeEpic = actions$ =>
  actions$.ofType(FETCH_RECIPE)
    .mergeMap(action => fetchRecipe(action.payload))
    .map(response => setRecipe(response));

export default combineEpics(
  fetchRecipeEpic
);