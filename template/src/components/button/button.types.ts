import { PressableProps } from 'react-native';

export type ButtonPresets = 'default' | 'outline' | 'text';

export interface ButtonTypes extends PressableProps {
  isLoading?: boolean;
  preset?: ButtonPresets;
}
