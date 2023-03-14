import React from 'react';
import renderer from 'react-test-renderer';

import { Screen } from './Screen';

describe('Screen', () => {
  it('should render scrollable screen', () => {
    const tree = renderer.create(<Screen preset="scroll" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render fixed screen', () => {
    const tree = renderer.create(<Screen preset="fixed" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
