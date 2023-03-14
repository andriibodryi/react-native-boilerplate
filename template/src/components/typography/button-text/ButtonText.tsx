import * as React from 'react';

import { BasicText } from '../basic-text';
import { useBasicTextStyles } from './button-text.presets';
import { ButtonTextTypes } from './button-text.types';

export const ButtonText: React.FC<ButtonTextTypes> = ({
  preset,
  style,
  ...rest
}) => {
  const styles = useBasicTextStyles();

  return <BasicText style={[styles[preset], style]} {...rest} />;
};

export default ButtonText;
