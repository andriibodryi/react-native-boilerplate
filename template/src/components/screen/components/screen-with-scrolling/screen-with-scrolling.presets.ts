import { StyleSheet } from 'react-native';
import { useMemo } from 'react';

import { useStyleConfig } from '@src/styles/useStyleConfig';

export const useScreenWithScrollingStyles = () => {
  const theme = useStyleConfig();
  return useMemo(
    () =>
      StyleSheet.create({
        outer: {
          backgroundColor: theme.colors.white,
          flex: 1,
          height: '100%',
        },
        inner: {
          alignItems: 'stretch',
          height: '100%',
          justifyContent: 'flex-start',
          width: '100%',
        },
      }),
    [theme.colors.white],
  );
};
