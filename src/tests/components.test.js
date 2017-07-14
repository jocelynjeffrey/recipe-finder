import React from 'react';
import ReactDOM from 'react-dom';
import Details from '../components/Details';
import ResultsList from '../components/ResultsList';
import Search from '../components/Search';
import { shallow } from 'enzyme';

describe('component tests', function() {

  const props = {
    list: [],
    isError: false,
    selectedRecipe: null,
    inputChange: '',
  }

  describe('<Details />', function() {
    it('renders correctly', function() {
      const div = document.createElement('div');
      ReactDOM.render(<Details />, div);
    });
  });

  describe('<ResultsList />', function() {
    it('renders a list', function() {
//needs to map over props.list
    });
  });

  describe('<Search />', function() {
    it('renders correctly', function() {
//needs access to input
    });
  });


});