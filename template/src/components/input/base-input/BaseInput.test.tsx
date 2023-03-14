import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import BasicInput from './BasicInput';

const onEventMock = jest.fn();
const placeholder = 'dummyPlaceholder';

describe('BaseInput', () => {
  it('should render correctly', () => {
    const { toJSON } = render(<BasicInput />);

    expect(toJSON()).toMatchSnapshot();
  });

  describe('different events', () => {
    it('should correctly handle onBlur event', () => {
      const { getByPlaceholderText } = render(
        <BasicInput onBlur={onEventMock} placeholder={placeholder} />,
      );
      fireEvent(getByPlaceholderText(placeholder), 'onBlur');

      expect(onEventMock).toHaveBeenCalled();
    });

    it('should correctly handle onFocus event', () => {
      const { getByPlaceholderText } = render(
        <BasicInput onFocus={onEventMock} placeholder={placeholder} />,
      );
      fireEvent(getByPlaceholderText(placeholder), 'onFocus');

      expect(onEventMock).toHaveBeenCalled();
    });
  });
});
