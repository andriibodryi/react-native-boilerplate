import * as React from 'react';
import { Pressable, StyleProp, TextStyle, ViewStyle } from 'react-native';

import { TextColor } from '@src/components/typography/text/text.types';
import { IconTypes } from '@src/components/icon/icon.types';

import { stylePresets } from './list-item.presets';

export type ListItemPreset = keyof typeof stylePresets;

export type ListItemTypes = React.ComponentPropsWithRef<typeof Pressable> & {
  label: React.ReactNode;
  labelStyle?: StyleProp<TextStyle>;
  sublabel?: React.ReactNode;
  sublabelStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  preset?: ListItemPreset;
  sublabelNumberOfLines?: number;
  labelNumberOfLines?: number;
  headingColor?: TextColor;
  leftIcon?: IconTypes | null;
  leftIconColor?: string;
  rightIcon?: IconTypes | null;
  rightIconColor?: string;
  backgroundColor?: string;
};
