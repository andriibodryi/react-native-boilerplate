import { StyleSheet } from 'react-native';
import { useMemo } from 'react';

import { useStyleConfig } from '@src/styles/useStyleConfig';

import { FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, MAIN_FONT } from '../fonts';

export const useBasicTextStyles = () => {
  const theme = useStyleConfig();

  return useMemo(
    () =>
      StyleSheet.create({
        root: {
          fontSize: FONT_SIZE.md,
          lineHeight: LINE_HEIGHT.md,
          fontWeight: FONT_WEIGHT.regular,
          fontFamily: MAIN_FONT.regular,
          color: theme.colors.green,
        },
      }),
    [theme],
  );
};
