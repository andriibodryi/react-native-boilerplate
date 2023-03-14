import * as React from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useScreenWithScrollingStyles } from '@src/components/screen/components/screen-with-scrolling/screen-with-scrolling.presets';
import { useStyleConfig } from '@src/styles/useStyleConfig';

import { ScreenTypes } from '../../screen.types';
import { offsets } from '../../screen.presets';

const ScreenWithScrolling: React.FC<ScreenTypes> = ({
  backgroundColor,
  children,
  keyboardOffset,
  keyboardShouldPersistTaps,
  bounces,
  style = {},
}) => {
  const { colors } = useStyleConfig();
  const styles = useScreenWithScrollingStyles();

  const backgroundStyle = {
    backgroundColor: backgroundColor || colors.white,
  };

  return (
    <View style={[styles.outer, backgroundStyle]}>
      <KeyboardAwareScrollView
        style={[styles.outer, backgroundStyle]}
        contentContainerStyle={[styles.inner, style]}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'handled'}
        extraHeight={offsets[keyboardOffset || 'none']}
        bounces={bounces}
      >
        {children}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ScreenWithScrolling;
