import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useStyleConfig } from '@src/styles/useStyleConfig';
import spacing from '@src/styles/constants/spacing';

export const useHeaderStyles = () => {
  const { colors } = useStyleConfig();

  return useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          height: 56,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderBottomColor: colors.grey_00,
        },
        container: {
          width: '100%',
        },
        title: {
          textAlign: 'center',
        },

        actionTextContainer: {
          flexGrow: 0,
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          paddingHorizontal: spacing.s030,
          zIndex: 2,
        },

        actionText: {
          color: colors.grey_08,
        },

        actionIconContainer: {
          flexGrow: 0,
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          paddingHorizontal: spacing.s030,
          zIndex: 2,
        },

        actionFillerContainer: {
          width: 16,
        },

        titleWrapperCenter: {
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
          position: 'absolute',
          paddingHorizontal: spacing.s040,
          zIndex: 1,
        },

        titleWrapperFlex: {
          justifyContent: 'center',
          flexGrow: 1,
        },
      }),
    [colors.grey_08, colors.grey_00],
  );
};
