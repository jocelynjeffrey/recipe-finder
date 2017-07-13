import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';

import {
  onTextInputChange,
  getRecipeByName,
  showRecipeDetails,
} from '../redux/actions/recipe.actions';

describe('actions', () => {

  describe('onTextInputChange', () => {
    it('should have a payload of value', () => {
      const value = "pear"
      expect(onTextInputChange(value).payload).toEqual(value);
    });

    it('should have a type of TEXT_INPUT_CHANGE', () => {
      expect(onTextInputChange().type).toEqual('TEXT_INPUT_CHANGE');
    });
  })

  describe('getRecipeByName', () => {
    it('should have a payload of value', () => {
      const value = "peach"
      expect(getRecipeByName(value).payload).toEqual(value);
    });

    it('should have a type of GET_RECIPES_BY_NAME', () => {
      expect(getRecipeByName().type).toEqual('GET_RECIPES_BY_NAME');
    });
  })

  describe('showRecipeDetails', () => {
    it('should have a payload of value', () => {
      const recipe = {name: 'pineapple cake', ingredients: ['pineapple', 'cake']}
      expect(showRecipeDetails(recipe).payload).toEqual(recipe);
    });

    it('should have a type of SHOW_RECIPE_DETAILS', () => {
      expect(showRecipeDetails().type).toEqual('SHOW_RECIPE_DETAILS');
    });
  })

})