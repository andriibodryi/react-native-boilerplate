import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Icon, Text } from '@src/components';
import { useSafeAreaInsets } from '@src/hooks';
import {
  HeaderActionProps,
  HeaderProps,
} from '@src/components/header/header.types';

import { useHeaderStyles } from './header.styles';

export function Header(props: HeaderProps) {
  const {
    backgroundColor = 'white',
    LeftActionComponent,
    leftIcon,
    leftIconColor,
    leftText,
    onLeftPress,
    onRightPress,
    RightActionComponent,
    rightIcon,
    rightIconColor,
    rightText,
    title,
    titleMode = 'center',
    titleContainerStyle: $titleContainerStyleOverride,
    style: $styleOverride,
    titleStyle: $titleStyleOverride,
    containerStyle: $containerStyleOverride,
  } = props;
  const styles = useHeaderStyles();

  const containerInsets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingTop: containerInsets.top },
        { backgroundColor },
        $containerStyleOverride,
      ]}
    >
      <View style={[styles.wrapper, $styleOverride]}>
        <HeaderAction
          text={leftText}
          icon={leftIcon}
          iconColor={leftIconColor}
          onPress={onLeftPress}
          backgroundColor={backgroundColor}
          ActionComponent={LeftActionComponent}
        />

        {Boolean(title) && (
          <View
            style={[
              titleMode === 'center' && styles.titleWrapperCenter,
              titleMode === 'flex' && styles.titleWrapperFlex,
              $titleContainerStyleOverride,
            ]}
            pointerEvents="none"
          >
            <Text
              preset={'textSmMedium'}
              children={title}
              style={[styles.title, $titleStyleOverride]}
            />
          </View>
        )}

        <HeaderAction
          text={rightText}
          icon={rightIcon}
          iconColor={rightIconColor}
          onPress={onRightPress}
          backgroundColor={backgroundColor}
          ActionComponent={RightActionComponent}
        />
      </View>
    </View>
  );
}

function HeaderAction(props: HeaderActionProps) {
  const { backgroundColor, icon, text, onPress, ActionComponent, iconColor } =
    props;

  const styles = useHeaderStyles();

  if (ActionComponent) {
    return ActionComponent;
  }

  if (text) {
    return (
      <TouchableOpacity
        style={[styles.actionTextContainer, { backgroundColor }]}
        onPress={onPress}
        disabled={!onPress}
        activeOpacity={0.8}
      >
        <Text
          preset={'textSmMedium'}
          children={text}
          style={styles.actionText}
        />
      </TouchableOpacity>
    );
  }

  if (icon) {
    return (
      <Icon
        size={24}
        name={icon}
        color={iconColor}
        onPress={onPress}
        containerStyle={[styles.actionIconContainer, { backgroundColor }]}
      />
    );
  }

  return <View style={[styles.actionFillerContainer, { backgroundColor }]} />;
}
