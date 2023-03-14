import { StyleSheet } from 'react-native';

import { useStyleConfig } from '@src/styles/useStyleConfig';

export const useScreenWithoutScrollingStyles = () => {
  const theme = useStyleConfig();
  return StyleSheet.create({
    outer: {
      backgroundColor: theme.colors.white,
      flex: 1,
    },
    inner: {
      flexGrow: 1,
    },
  });
};
