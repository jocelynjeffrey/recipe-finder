import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';

describe('component tests', function() {
  describe('<App />', function() {
    it('renders correctly', function() {
      const wrapper = shallow(<App />);
      const childComponent = <Child />;

      expect(wrapper.contains(childComponent)).toEqual(true);
    });
  });
});