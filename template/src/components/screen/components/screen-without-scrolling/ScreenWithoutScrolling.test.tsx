import React from 'react';
import renderer from 'react-test-renderer';

import ScreenWithoutScrolling from './ScreenWithoutScrolling';

describe('ScreenWithScrolling', () => {
  it('should render scrollable screen', () => {
    const tree = renderer.create(<ScreenWithoutScrolling />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
