import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import {
  MAIN_FONT,
  FONT_WEIGHT,
  FONT_SIZE,
  LINE_HEIGHT,
} from '@src/components/typography/fonts';
import { useStyleConfig } from '@src/styles/useStyleConfig';

export const useBasicTextStyles = () => {
  const theme = useStyleConfig();

  return useMemo(
    () =>
      StyleSheet.create({
        defaultButton: {
          fontFamily: MAIN_FONT.medium,
          fontWeight: FONT_WEIGHT.medium,
          fontSize: FONT_SIZE['2xl'],
          lineHeight: LINE_HEIGHT['2xl'],
          color: theme.colors.white,
        },
        outlineButton: {
          fontFamily: MAIN_FONT.medium,
          fontWeight: FONT_WEIGHT.medium,
          fontSize: FONT_SIZE['2xl'],
          lineHeight: LINE_HEIGHT['2xl'],
          color: theme.colors.grey_07,
        },
        textButton: {
          fontFamily: MAIN_FONT.regular,
          fontWeight: FONT_WEIGHT.regular,
          fontSize: FONT_SIZE.lg,
          lineHeight: LINE_HEIGHT['2xl'],
          color: theme.colors.grey_07,
        },
      }),
    [theme],
  );
};
