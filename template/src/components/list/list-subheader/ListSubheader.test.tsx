import React from 'react';
import renderer from 'react-test-renderer';

import ListSubheader from './ListSubheader';

it('should render list subheader correctly', () => {
  const tree = renderer.create(<ListSubheader />).toJSON();

  expect(tree).toMatchSnapshot();
});
