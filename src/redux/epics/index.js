import { combineEpics } from 'redux-observable';
import { getRecipeByNameEpic, getRecipeByCaloriesEpic } from './recipe.epics'

export default combineEpics(
  getRecipeByNameEpic,
  getRecipeByCaloriesEpic,
);