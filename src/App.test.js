import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

import {
  onTextInputChange,
  getRecipeByName,
  showRecipeDetails,
} from './redux/actions/recipe.actions';

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
})