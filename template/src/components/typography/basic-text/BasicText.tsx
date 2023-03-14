import { FC } from 'react';
import { Text } from 'react-native';

import { useBasicTextStyles } from './basic-text.presets';
import { BasicTextTypes } from './basic-text.types';

const BasicText: FC<BasicTextTypes> = ({ children, style, ...rest }) => {
  const styles = useBasicTextStyles();
  return (
    <Text style={[styles.root, style]} {...rest}>
      {children}
    </Text>
  );
};

export default BasicText;
