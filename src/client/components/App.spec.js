import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';


it('renders App correctly', () => {
  const AppTree = renderer.create(
    <App />
  ).toJSON();
  expect(AppTree).toMatchSnapshot();
});
