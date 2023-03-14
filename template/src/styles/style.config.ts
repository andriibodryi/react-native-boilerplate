import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  WINDOW_WIDTH,
  WINDOW_HEIGHT,
} from './constants/styleHelper';
import Spacing from './constants/spacing';
import { Colors } from './constants/colors/lightThemeColors';
import { Typography } from './constants/typography';

export const appStyleConfigDefault = {
  colors: {
    ...Colors,
  },
  spacing: {
    ...Spacing,
  },
  typography: {
    ...Typography,
  },
  hitSlop: {
    top: Spacing.s100,
    right: Spacing.s100,
    bottom: Spacing.s100,
    left: Spacing.s100,
  },
  dimensions: { SCREEN_WIDTH, SCREEN_HEIGHT, WINDOW_WIDTH, WINDOW_HEIGHT },
};

export const appStyleConfigLight = {
  colors: {
    ...Colors,
  },
};

export const appStyleConfigDark = {};
