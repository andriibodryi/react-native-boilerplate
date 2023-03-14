import * as React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';

import { useScreenWithoutScrollingStyles } from '@src/components/screen/components/screen-without-scrolling/screen-without-scrolling.presets';
import { IS_ANDROID } from '@src/styles/constants/platforms';
import { useStyleConfig } from '@src/styles/useStyleConfig';

import { ScreenTypes } from '../../screen.types';
import { offsets } from '../../screen.presets';

const ScreenWithoutScrolling: React.FC<ScreenTypes> = ({
  backgroundColor,
  children,
  keyboardOffset,
  style = {},
}) => {
  const { colors } = useStyleConfig();
  const styles = useScreenWithoutScrollingStyles();
  const backgroundStyle = {
    backgroundColor: backgroundColor || colors.white,
  };

  return (
    <KeyboardAvoidingView
      style={[styles.outer, backgroundStyle]}
      behavior={IS_ANDROID ? 'height' : 'padding'}
      keyboardVerticalOffset={offsets[keyboardOffset || 'none']}
    >
      <View style={[styles.inner, style]}>{children}</View>
    </KeyboardAvoidingView>
  );
};

export default ScreenWithoutScrolling;
