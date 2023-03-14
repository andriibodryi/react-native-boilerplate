import { StyleSheet } from 'react-native';

import Spacing from '@src/styles/constants/spacing';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: Spacing.s040,
  },
  iconCircle: {
    borderWidth: 1,
  },
  message: {
    marginLeft: Spacing.s010,
    flexBasis: '85%',
  },
});
