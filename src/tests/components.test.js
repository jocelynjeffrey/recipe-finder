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
    recipeList: [
      {label: 'coffee', uri: 1, image: 'https://coffee/com/'},
      {label: 'tea', uri: 2,  image: 'https://tea/com/'}
    ],
    selectedRecipe: {
      label: 'coffee',
      uri: 1,
      calories: 3,
      image: 'https://coffee/com/',
      ingredients: ['coffee', 'water']
    },
  }

  describe('<App', function() {
    it('renders correctly', function() {
      const wrapper = shallow(<App {...mockData} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Details component', () => {
    const wrapper = shallow(<Details {...mockData} />)

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should render a list of ingredients', () => {
      expect(wrapper.find('ul').children().length).toEqual(mockData.recipeList.length);
    });

    it('should render an image', () => {
      const image = <img src={mockData.selectedRecipe.image} />;
      expect(wrapper.contains(image)).toEqual(true);

    });
  });

  describe('<ResultsList component', () => {
    const wrapper = shallow(<ResultsList {...mockData} />);

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should render the correct number of list elements', () => {
      expect(wrapper.find('.result').length).toEqual(2);
    });

    it('should call a method on button click', () => {
      const mockFunc = jest.genMockFunction();
      const button = shallow(<button onClick={mockFunc} />)
      button.simulate('click');
      expect(mockFunc).toHaveBeenCalled();
    });

  });

  describe('<Search component', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<Search />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should call a method on button click', () => {
      const mockFunc = jest.genMockFunction();
      const button = shallow(<button onClick={mockFunc} />)
      button.simulate('click');
      expect(mockFunc).toHaveBeenCalled();
    });
  });


});
