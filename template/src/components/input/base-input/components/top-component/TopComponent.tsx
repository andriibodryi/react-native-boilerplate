import React from 'react';
import { View } from 'react-native';

import { Text } from '@src/components/typography';
import { useStyleConfig } from '@src/styles/useStyleConfig';

import { styles } from './top-component.styles';
import type { TopComponentTypes } from './top-component.types';

const TopComponent: React.FC<TopComponentTypes> = ({
  label,
  hint,
  isFocused,
  isError,
}) => {
  const { colors } = useStyleConfig();

  const labelStyle = [
    {
      color: isFocused ? colors.grey_07 : colors.grey_03,
    },
    isError && {
      color: colors.red_dark,
    },
  ];

  return (
    <View style={styles.container}>
      {Boolean(label) && (
        <Text preset="textSmMedium" style={labelStyle}>
          {label}
        </Text>
      )}
      {Boolean(hint) && (
        <Text preset="textXsRegular" style={labelStyle}>
          {hint}
        </Text>
      )}
    </View>
  );
};

export default TopComponent;
