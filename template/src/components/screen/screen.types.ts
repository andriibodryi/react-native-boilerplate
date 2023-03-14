import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { KeyboardOffsets, ScreenPresets } from './screen.presets';

export interface ScreenTypes {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  preset?: ScreenPresets;
  backgroundColor?: string;
  keyboardOffset?: KeyboardOffsets;
  keyboardShouldPersistTaps?: 'handled' | 'always' | 'never';
  bounces?: boolean;
}
