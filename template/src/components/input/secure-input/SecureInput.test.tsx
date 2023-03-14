import React from 'react';
import { render } from '@testing-library/react-native';

import SecureInput from './SecureInput';

describe('Secure Input', () => {
  it('should render correctly', () => {
    const { toJSON } = render(<SecureInput />);

    expect(toJSON()).toMatchSnapshot();
  });
});
