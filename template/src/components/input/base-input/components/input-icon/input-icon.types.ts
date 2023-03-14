import { IconTypes } from '@src/components/icon/icon.types';

export interface InputIconTypes {
  iconName?: IconTypes;
  iconSize?: number;
  iconColor?: string;
  isFocused?: boolean;
  onPress?: () => void;
}
