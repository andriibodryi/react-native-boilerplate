import React from 'react';
import { render } from '@testing-library/react-native';

import ErrorLabel from './ErrorLabel';

describe('ErrorLabel', () => {
  it('should render correctly', () => {
    const { toJSON } = render(<ErrorLabel message="Dummy Message" />);

    expect(toJSON()).toMatchSnapshot();
  });
});
