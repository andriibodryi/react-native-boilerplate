import { Dimensions, StatusBarStyle } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

export const STATUS_BAR = {
  DARK_CONTENT: 'dark-content' as StatusBarStyle,
  LIGHT_CONTENT: 'light-content' as StatusBarStyle,
};
