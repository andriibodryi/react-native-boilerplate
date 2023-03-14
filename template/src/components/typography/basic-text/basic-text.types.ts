import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

export type BasicTextTypes = React.ComponentProps<typeof Text> & {
  style?: StyleProp<TextStyle>;
};
