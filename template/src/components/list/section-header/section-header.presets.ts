import { StyleSheet } from 'react-native';

import spacing from '@src/styles/constants/spacing';

const ALIGN_TEXT_VERTICALLY = 1;

const BASIC = {
  sectionHeader: {
    justifyContent: 'center',
    paddingLeft: spacing.s040,
    height: 26,
    width: '100%',
  },
  text: {},
} as const;

export const stylePresets = {
  basic: StyleSheet.create(BASIC),
  descriptiveList: StyleSheet.create({
    ...BASIC,
    sectionHeader: {
      ...BASIC.sectionHeader,
      height: 24,
      marginTop: spacing.s045,
      paddingTop: ALIGN_TEXT_VERTICALLY,
    },
    text: {
      letterSpacing: 1.5,
    },
  }),
};
