import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { ButtonText } from './ButtonText';

describe('ButtonText', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<ButtonText preset="outlineButton">basic text</ButtonText>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
