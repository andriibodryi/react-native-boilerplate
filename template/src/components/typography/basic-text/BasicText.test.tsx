import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import BasicText from './BasicText';

describe('BasicText', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<BasicText>basic text</BasicText>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
