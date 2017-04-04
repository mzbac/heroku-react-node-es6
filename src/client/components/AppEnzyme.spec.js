import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import App from './App';

it('shallow renders App correctly', () => {
  const component = shallow(
    <App />
  );
  const tree = shallowToJson(component);
  expect(tree).toMatchSnapshot();
});
