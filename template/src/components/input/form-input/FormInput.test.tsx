import React from 'react';
import { render } from '@testing-library/react-native';

import FormInput from './FormInput';

const dummyForm = {
  formState: {
    errors: {},
  },
};

jest.mock('react-hook-form', () => ({
  useController: () => ({
    field: {
      value: 'dummyValue',
      onChange: () => {},
      onBlur: () => {},
    },
    fieldState: {
      isDirty: false,
      error: false,
    },
  }),
  useFormContext: () => dummyForm,
}));

describe('FormInput', () => {
  it('should render correctly', () => {
    const { toJSON } = render(<FormInput type="text" name="dummyName" />);

    expect(toJSON()).toMatchSnapshot();
  });
});
