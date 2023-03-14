import { StyleSheet } from 'react-native';
import { useMemo } from 'react';

import { useStyleConfig } from '@src/styles/useStyleConfig';

export const useBottomTabStyles = () => {
  const { colors } = useStyleConfig();

  return useMemo(
    () =>
      StyleSheet.create({
        tabBarStyle: {
          shadowOffset: { height: 8, width: 0 },
          shadowOpacity: 0.6,
          shadowRadius: 10,
          borderTopWidth: 2,
          backgroundColor: colors.white,
        },
        tabBarStyleColor: {
          backgroundColor: colors.purple,
        },
      }),
    [colors.purple, colors.white],
  );
};
