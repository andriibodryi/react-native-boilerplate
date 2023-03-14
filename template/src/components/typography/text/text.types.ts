import React from 'react';
import { Text as NativeText, TextStyle, StyleProp } from 'react-native';

import { presets, textDecorators } from './text.presets';

export type TextPreset = keyof typeof presets;

type TextAppearance = keyof typeof textDecorators;

export type TextColor = 'primary' | 'secondary';

export type TextTypes = React.ComponentProps<typeof NativeText> & {
  preset?: TextPreset;
  style?: StyleProp<TextStyle>;
  appearance?: TextAppearance;
  color?: TextColor;
};
