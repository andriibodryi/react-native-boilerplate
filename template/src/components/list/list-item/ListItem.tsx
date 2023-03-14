import * as React from 'react';
import { Pressable, View } from 'react-native';

import { Text } from '@src/components/typography';
import { Icon } from '@src/components';

import { stylePresets } from './list-item.presets';
import { ListItemTypes } from './list-item.types';

const ListItem: React.FC<ListItemTypes> = ({
  label,
  sublabel,
  style,
  labelStyle,
  sublabelStyle,
  preset = 'basic',
  sublabelNumberOfLines = 1,
  labelNumberOfLines = 1,
  headingColor = 'secondary',
  rightIconColor,
  rightIcon,
  leftIcon,
  leftIconColor,
  backgroundColor,
  ...rest
}) => {
  const styles = stylePresets[preset];

  return (
    <Pressable {...rest} style={[styles.container, style]}>
      <View style={styles.row}>
        {leftIcon && (
          <Icon
            size={24}
            name={leftIcon}
            color={leftIconColor}
            containerStyle={[
              styles.actionIconContainer,
              styles.marginVerticalNone,
              { backgroundColor },
            ]}
          />
        )}
        <View style={[styles.item, styles.content]}>
          <Text
            color={headingColor}
            preset="textSmMedium"
            selectable={false}
            style={labelStyle}
            numberOfLines={labelNumberOfLines}
          >
            {label}
          </Text>
          {Boolean(sublabel) && (
            <Text
              preset="textSmRegular"
              selectable={false}
              style={sublabelStyle}
              numberOfLines={sublabelNumberOfLines}
            >
              {sublabel}
            </Text>
          )}
        </View>

        {rightIcon && (
          <Icon
            size={24}
            name={rightIcon}
            color={rightIconColor}
            containerStyle={[
              styles.actionIconContainer,
              styles.iconMarginRight,
              styles.marginVerticalNone,
              { backgroundColor },
            ]}
          />
        )}
      </View>
    </Pressable>
  );
};

export default ListItem;
