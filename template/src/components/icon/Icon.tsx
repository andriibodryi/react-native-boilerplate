import * as React from 'react';
import { ComponentType } from 'react';
import {
  Image,
  ImageStyle,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import { useStyleConfig } from '@src/styles/useStyleConfig';

import { IconProps, iconRegistry } from './icon.types';

const Icon: React.FC<IconProps> = ({
  name,
  color,
  size,
  style: $imageStyleOverride,
  containerStyle,
  ...WrapperProps
}) => {
  const { colors } = useStyleConfig();
  const isPressable = Boolean(WrapperProps.onPress);
  const Wrapper: ComponentType<TouchableOpacityProps> = WrapperProps?.onPress
    ? TouchableOpacity
    : View;

  const falttenStyles = StyleSheet.flatten([
    $imageStyle,
    { tintColor: color || colors.grey_03 },
    size ? { width: size, height: size } : {},
    $imageStyleOverride,
  ]);

  return (
    <Wrapper
      accessibilityRole={isPressable ? 'imagebutton' : undefined}
      {...WrapperProps}
      style={containerStyle}
    >
      <Image style={falttenStyles} source={iconRegistry[name]} />
    </Wrapper>
  );
};

export default Icon;

const $imageStyle: ImageStyle = {
  resizeMode: 'contain',
};
