import React from 'react';
import { render } from '@testing-library/react-native';

import SanitizedInput from './SanitizedInput';

describe('SanitizedInput', () => {
  it('should render correctly', () => {
    const tree = render(<SanitizedInput />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
