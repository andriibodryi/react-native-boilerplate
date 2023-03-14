import React from 'react';
import renderer from 'react-test-renderer';

import ScreenWithScrolling from './ScreenWithScrolling';

describe('ScreenWithScrolling', () => {
  it('should render scrollable screen', () => {
    const tree = renderer
      .create(<ScreenWithScrolling preset="scroll" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
