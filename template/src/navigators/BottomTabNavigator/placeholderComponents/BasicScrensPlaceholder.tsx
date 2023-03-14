import { Text as RNText, View } from 'react-native';
import { FC } from 'react';

import Text from '@src/components/typography/text/Text';

export const ScreenTemplate: FC = () => {
  return (
    <View>
      <RNText>Hello, screen</RNText>
      <Text preset={'textMdRegular'}>Typography</Text>
    </View>
  );
};
