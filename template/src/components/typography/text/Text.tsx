import * as React from 'react';

import { useStyleConfig } from '@src/styles/useStyleConfig';

import { BasicText } from '../basic-text';
import { TextTypes } from './text.types';
import { presets, textDecorators } from './text.presets';

const Text: React.FC<TextTypes> = ({
  preset = 'textMdRegular',
  style,
  appearance = 'defaultDecoration',
  color = 'primary',
  ...rest
}) => {
  const { colors } = useStyleConfig();

  const textColor = {
    primary: colors.grey_03,
    secondary: colors.grey_07,
  };

  return (
    <BasicText
      style={[
        presets[preset],
        textDecorators[appearance],
        {
          color: textColor[color],
        },
        style,
      ]}
      {...rest}
    />
  );
};

export default Text;
