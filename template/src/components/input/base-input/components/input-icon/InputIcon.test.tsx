import React from 'react';
import { render } from '@testing-library/react-native';

import InputIcon from './InputIcon';

describe('InputIcon', () => {
  it('should render correctly', () => {
    const { toJSON } = render(<InputIcon />);

    expect(toJSON()).toMatchSnapshot();
  });
});
