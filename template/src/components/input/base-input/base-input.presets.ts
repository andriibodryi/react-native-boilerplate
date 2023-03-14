import { Platform, StyleSheet } from 'react-native';

import { presets } from '@src/components/typography/text/text.presets';
import Spacing from '@src/styles/constants/spacing';

const FIX_IOS_VERTICAL_FONT_ALIGN = Platform.select({
  ios: {
    position: 'relative',
    top: -2,
  } as const,
});

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },

  bottomLabelContainer: {
    marginTop: Spacing.s015,
    minHeight: Spacing.s040,
    position: 'relative',
  },

  input: {
    flex: 1,
    ...presets.textMdRegular,
    ...FIX_IOS_VERTICAL_FONT_ALIGN,
  },

  inputContainer: {
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    overflow: 'hidden',
    paddingLeft: 15,
    position: 'relative',
    alignSelf: 'stretch',
    width: '100%',
  },

  label: {
    marginBottom: Spacing.s015,
  },

  maxLengthLabel: {
    position: 'absolute',
    right: 0,
    top: 0,
  },

  singleLineInputContainer: {
    alignItems: 'center',
  },
});
