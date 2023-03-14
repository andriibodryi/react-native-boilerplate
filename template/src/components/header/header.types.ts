import {
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import { ReactElement } from 'react';

import { IconTypes } from '@src/components/icon/icon.types';

export interface HeaderProps {
  titleMode?: 'center' | 'flex';

  titleStyle?: StyleProp<TextStyle>;

  titleContainerStyle?: StyleProp<ViewStyle>;

  style?: StyleProp<ViewStyle>;

  containerStyle?: StyleProp<ViewStyle>;

  backgroundColor?: string;

  title?: string;

  leftIcon?: IconTypes;

  leftIconColor?: string;

  leftText?: string;

  LeftActionComponent?: ReactElement;

  onLeftPress?: TouchableOpacityProps['onPress'];

  rightIcon?: IconTypes;

  rightIconColor?: string;

  rightText?: string;

  RightActionComponent?: ReactElement;

  onRightPress?: TouchableOpacityProps['onPress'];
}

export interface HeaderActionProps {
  backgroundColor?: string;
  icon?: IconTypes;
  iconColor?: string;
  text?: string;
  onPress?: TouchableOpacityProps['onPress'];
  ActionComponent?: ReactElement;
}
