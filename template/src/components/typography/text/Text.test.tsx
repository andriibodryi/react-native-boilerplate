import React from 'react';
import { render } from '@testing-library/react-native';

import Text from './Text';
import { presets } from './text.presets';

const setup = (
  overrideOrAddProps?: Partial<React.ComponentProps<typeof Text>>,
) => render(<Text {...overrideOrAddProps} />);

describe('Text', () => {
  it('should render correctly when passing no props', () => {
    const { toJSON } = setup();

    expect(toJSON()).toMatchSnapshot();
  });

  describe('presets', () => {
    const mockText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

    it('should accept no preset - defaults to textMdRegular', () => {
      const { getByText, toJSON } = setup({
        children: mockText,
      });

      expect(getByText(mockText).props.children).toBe(mockText);
      expect(getByText(mockText).props.style.flat()).toContain(
        presets.textMdRegular,
      );
      expect(toJSON()).toMatchSnapshot();
    });

    it('should accept buttonSecondary as preset', () => {
      const { getByText, toJSON } = setup({
        children: mockText,
        preset: 'textSmRegular',
      });

      expect(getByText(mockText).props.children).toBe(mockText);
      expect(toJSON()).toMatchSnapshot();
    });

    it('should be resilient to invalid presets', () => {
      const { getByText, toJSON } = setup({
        children: mockText,
        preset: 'textMdMedium',
      });

      expect(getByText(mockText).props.children).toBe(mockText);
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
