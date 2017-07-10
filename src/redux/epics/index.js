import { GET_RECIPES_BY_NAME, RECIPES_RECEIVED_SUCCESS } from '../actions/recipe.actions';
import { combineEpics } from 'redux-observable';

import { Observable } from 'rxjs';

const ENDPOINT = `https://api.edamam.com/search?`;
const APP_ID = '289802fc';
const APP_KEY = 'c4980c24ac487e6f71cb773f010aa03d';

const getRecipeByNameEpic = actions$ =>
  actions$.ofType(GET_RECIPES_BY_NAME)
    .mergeMap(action => Observable.ajax(`${ENDPOINT}&q=${action.payload}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    .map(({ response }) => ({
          type: RECIPES_RECEIVED_SUCCESS,
          payload: response.hits.map(hit => hit.recipe),
        }))
      );

export default combineEpics(
  getRecipeByNameEpic
);