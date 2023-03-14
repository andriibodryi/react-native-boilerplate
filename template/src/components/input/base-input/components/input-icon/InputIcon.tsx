import React, { FC } from 'react';
import { Pressable } from 'react-native';

import { useStyleConfig } from '@src/styles/useStyleConfig';
import { Icon } from '@src/components/icon';
import { IconTypes } from '@src/components/icon/icon.types';

import { InputIconTypes } from './input-icon.types';
import { styles, INPUT_ICON_SIZE } from './input-icon.presets';

const InputIcon: FC<InputIconTypes> = ({
  iconName,
  iconSize,
  isFocused,
  iconColor,
  onPress,
}) => {
  const { colors } = useStyleConfig();

  return (
    <>
      {Boolean(iconName) && (
        <Pressable onPress={onPress}>
          <Icon
            style={styles.icon}
            name={iconName as IconTypes}
            color={isFocused ? colors.grey_03 : iconColor || colors.grey_07}
            size={iconSize || INPUT_ICON_SIZE}
          />
        </Pressable>
      )}
    </>
  );
};

export default InputIcon;
