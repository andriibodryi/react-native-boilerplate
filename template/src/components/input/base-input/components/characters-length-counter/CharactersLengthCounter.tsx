import React from 'react';

import { Text } from '@src/components/typography';
import { useStyleConfig } from '@src/styles/useStyleConfig';

import CharactersLengthCounterTypes from './characters-length-counter.types';

const CharactersLengthCounter: React.FC<CharactersLengthCounterTypes> = ({
  length,
  maxLength,
  style,
  showCounter,
}) => {
  const { colors } = useStyleConfig();

  const shouldSowCounter = maxLength || showCounter;
  if (!shouldSowCounter) {
    return null;
  }

  const text = `${length ?? 0}/${maxLength}`;

  return (
    <Text
      preset="textXsRegular"
      style={[
        style,
        {
          color: colors.grey_03,
        },
      ]}
    >
      {text}
    </Text>
  );
};

export default CharactersLengthCounter;
