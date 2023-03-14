import React from 'react';
import { StyleProp, TextStyle } from 'react-native';

import { BasicText } from '../basic-text';

export type ButtonTextPreset = 'defaultButton' | 'outlineButton' | 'textButton';

export type ButtonTextTypes = React.ComponentProps<typeof BasicText> & {
  preset: ButtonTextPreset;
  style?: StyleProp<TextStyle>;
};
