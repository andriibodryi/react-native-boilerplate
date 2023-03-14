import { StyleSheet, ViewStyle } from 'react-native';
import { useMemo, useRef } from 'react';

import { useStyleConfig } from '@src/styles/useStyleConfig';
import { ButtonPresets } from '@src/components/button/button.types';
import { ButtonTextPreset } from '@src/components/typography/button-text/button-text.types';

export const useButtonStyle = () => {
  const theme = useStyleConfig();
  const baseStyles = useRef<ViewStyle>({
    height: theme.spacing.s070,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'stretch',
    marginBottom: theme.spacing.s040,
  }).current;

  return useMemo(
    () =>
      StyleSheet.create({
        default: {
          ...baseStyles,

          backgroundColor: theme.colors.grey_07,
        },
        outline: {
          ...baseStyles,

          borderWidth: 1,
          backgroundColor: theme.colors.transparent,
          borderColor: theme.colors.green_dark,
        },
        text: {
          backgroundColor: theme.colors.transparent,
        },
      }),
    [theme, baseStyles],
  );
};

export const textPresets: { [key in ButtonPresets]: ButtonTextPreset } = {
  text: 'textButton',
  outline: 'outlineButton',
  default: 'defaultButton',
};
