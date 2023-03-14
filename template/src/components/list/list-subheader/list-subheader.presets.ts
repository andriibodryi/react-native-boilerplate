import { StyleSheet, TextStyle } from 'react-native';

import { colors } from '@src/theme';
import { FONT_SIZE } from '@src/components/typography/fonts';
import spacing from '@src/styles/constants/spacing';

const BASE_VIEW: TextStyle = {
  color: colors.text,
  paddingBottom: spacing.s020,
  letterSpacing: 1.5,
  fontSize: FONT_SIZE.xs,
};

/**
 * All the variations of heading styling within the app.
 */
export const styles = StyleSheet.create({
  base: {
    ...BASE_VIEW,
  },
});
