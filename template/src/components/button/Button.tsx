import React, { PropsWithChildren } from 'react';
import { Pressable, ActivityIndicator } from 'react-native';

import { useStyleConfig } from '@src/styles/useStyleConfig';
import { ButtonText } from '@src/components/typography/button-text';

import { textPresets, useButtonStyle } from './button.styles';
import { ButtonTypes } from './button.types';

export const Button: React.FC<PropsWithChildren<ButtonTypes>> = ({
  isLoading,
  children,
  preset = 'default',
  ...rest
}) => {
  const styles = useButtonStyle();
  const { colors } = useStyleConfig();

  return (
    <Pressable {...rest} style={styles[preset]}>
      {isLoading ? (
        <ActivityIndicator color={colors.grey_08} />
      ) : (
        <ButtonText style={styles.text} preset={textPresets[preset]}>
          {children}
        </ButtonText>
      )}
    </Pressable>
  );
};
