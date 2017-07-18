import { Observable } from 'rxjs';
import { RECIPE_ACTIONS } from '../actions/recipe.actions';
 // add in order to use mergeMap
import 'rxjs/add/operator/mergeMap';

const APP_ID = '289802fc';
const APP_KEY = 'c4980c24ac487e6f71cb773f010aa03d';
const ENDPOINT = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}`;

export const getRecipeByNameEpic = actions$ =>
  actions$.ofType(RECIPE_ACTIONS.GET_RECIPES_BY_NAME)
    .mergeMap(action =>
      Observable.ajax(`${ENDPOINT}&q=${action.payload}`)
      .map(({ response }) => ({
        type: RECIPE_ACTIONS.RECIPES_RECEIVED_SUCCESS,
        payload: response.hits.map(hit => hit.recipe),
      }))
      .catch(error => Observable.of({
        type: RECIPE_ACTIONS.RECIPES_RECEIVED_ERROR,
        payload: error.xhr.response,
      }))
    );

export const getRecipeByCaloriesEpic = actions$ =>
// const CALORIE_RANGE = `gte${CAL_LOWER},lte${CAL_UPPER}`
  actions$.ofType(RECIPE_ACTIONS.GET_RECIPES_BY_CALORIES)
    .mergeMap(action =>
      Observable.ajax(`${ENDPOINT}&q=${action.payload.nameInput}&calories=gte${action.payload.calLower},lte${action.payload.calUpper}`)
      .map(({ response }) => ({
        type: RECIPE_ACTIONS.RECIPES_RECEIVED_SUCCESS,
        payload: response.hits.map(hit => hit.recipe),
      }))
      .catch(error => Observable.of({
        type: RECIPE_ACTIONS.RECIPES_RECEIVED_ERROR,
        payload: error.xhr.response,
        error: true
      }))
    );
