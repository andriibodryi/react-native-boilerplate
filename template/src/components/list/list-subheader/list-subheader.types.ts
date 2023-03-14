import * as React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

export type ListSubheaderTypes = React.ComponentProps<typeof Text> & {
  style?: StyleProp<TextStyle>;
};
