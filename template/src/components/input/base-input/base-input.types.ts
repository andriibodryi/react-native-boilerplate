import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { IconTypes } from '@src/components/icon/icon.types';

import { TextInputTypes } from './components/text-input/text-input.types';

export interface BaseInputTypes extends TextInputTypes {
  label?: string;
  hint?: string;
  errorMessage?: string;
  iconName?: IconTypes;
  iconSize?: number;
  iconColor?: string;
  inputBlockStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  rightComponent?: React.ReactNode;
  disabled?: boolean;
  onChangeText?: (text: string) => void;
  shouldShowCharactersLengthCounter?: boolean;
  onIconPress?: () => void;
  forceValueUpdate?: boolean;
  border?: 'primary' | 'secondary';
  hidePlaceholderOnFocus?: boolean;
}
