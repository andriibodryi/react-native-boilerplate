import React from 'react';
import { View } from 'react-native';

import { Text } from '@src/components/typography';
import { useStyleConfig } from '@src/styles/useStyleConfig';

import { styles } from './error-label.presets';
import { ErrorLabelTypes } from './error-label.types';

const ErrorLabel: React.FC<ErrorLabelTypes> = ({ message }) => {
  const { colors } = useStyleConfig();

  const isErrorLabelHidden = !message;
  if (isErrorLabelHidden) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text
        preset="textXsRegular"
        style={[
          styles.message,
          {
            color: colors.red_dark,
          },
        ]}
      >
        {message}
      </Text>
    </View>
  );
};

export default ErrorLabel;
