import { StyleSheet } from 'react-native';

import spacing from '@src/styles/constants/spacing';

const BASIC = {
  container: {
    height: spacing.s080,
    justifyContent: 'center',
    width: '100%',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginVerticalNone: {
    marginVertical: spacing.s000,
  },
  iconMarginRight: {
    marginRight: spacing.s000,
  },
  item: {
    marginVertical: spacing.s020,
    paddingLeft: spacing.s020,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  sublabel: {},

  actionIconContainer: {
    flexGrow: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: spacing.s030,
    zIndex: 2,
  },
} as const;

export const stylePresets = {
  basic: StyleSheet.create(BASIC),
  descriptiveList: StyleSheet.create({
    ...BASIC,
    item: {
      ...BASIC.item,
      marginVertical: 0,
      paddingLeft: spacing.s040,
      paddingTop: spacing.s040,
    },
  }),
};
