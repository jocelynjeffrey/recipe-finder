import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { App } from '../App';
import Details from '../components/Details';
import ResultsList from '../components/ResultsList';
import Search from '../components/Search';
import { shallow } from 'enzyme';

describe('component tests', function() {

  const mockData = {
    recipeList: [ {label: 'coffee', uri: 1}, {label: 'tea', uri: 2} ],
    isError: false,
    selectedRecipe: {label: 'coffee', calories: 3},
    textInput: 'pineapple',
  }

  describe('<App />', function() {
    it('renders correctly', function() {
      const wrapper = shallow(<App {...mockData} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<Details />', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<Details />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('<ResultsList />', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<ResultsList {...mockData} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('<Search />', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<Search />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });


});
