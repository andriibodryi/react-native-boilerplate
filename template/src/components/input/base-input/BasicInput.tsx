import React, { FC, useState } from 'react';
import { View } from 'react-native';

import { useStyleConfig } from '@src/styles/useStyleConfig';

import { styles } from './base-input.presets';
import { BaseInputTypes } from './base-input.types';
import ErrorLabel from './components/error-label/ErrorLabel';
import TopComponent from './components/top-component/TopComponent';
import CharactersLengthCounter from './components/characters-length-counter/CharactersLengthCounter';
import TextInput from './components/text-input/TextInput';
import InputIcon from './components/input-icon/InputIcon';

const BaseInput: FC<BaseInputTypes> = ({
  label,
  onFocus,
  onBlur,
  value,
  maxLength,
  errorMessage,
  inputBlockStyle,
  inputContainerStyle: inputContainerStyleProp,
  style,
  iconName,
  iconSize,
  iconColor,
  rightComponent,
  hint,
  disabled = false,
  shouldShowCharactersLengthCounter = false,
  onIconPress,
  border = 'primary',
  placeholder,
  hidePlaceholderOnFocus = false,
  ...rest
}) => {
  const { colors } = useStyleConfig();
  const [isFocused, setIsFocused] = useState(false);

  const isError = Boolean(errorMessage);

  const borderVariant = {
    primary: isFocused ? colors.grey_07 : colors.grey_03,
    secondary: isFocused ? colors.grey_01 : colors.grey_04,
  };

  const inputContainerStyle = [
    styles.inputContainer,
    {
      borderColor: borderVariant[border],
    },
    isError && {
      borderColor: colors.red_dark,
    },
    disabled && {
      backgroundColor: colors.grey_03,
    },
    !rest.multiline && styles.singleLineInputContainer,
    inputContainerStyleProp,
  ];

  const inputStyle = [styles.input, { color: colors.black }, style];

  return (
    <View style={styles.wrapper}>
      <TopComponent
        label={label}
        hint={hint}
        isFocused={isFocused}
        isError={isError}
      />

      <View style={inputBlockStyle}>
        <View style={inputContainerStyle}>
          <TextInput
            style={inputStyle}
            onFocus={e => {
              setIsFocused(true);
              onFocus?.(e);
            }}
            onBlur={e => {
              setIsFocused(false);
              onBlur?.(e);
            }}
            placeholderTextColor={colors.grey_04}
            placeholder={hidePlaceholderOnFocus && isFocused ? '' : placeholder}
            value={value}
            maxLength={maxLength}
            editable={!disabled}
            accessible
            {...rest}
          />
          {rightComponent}
          <InputIcon
            iconName={iconName}
            iconSize={iconSize}
            iconColor={iconColor}
            isFocused={isFocused}
            onPress={onIconPress}
          />
        </View>

        <View style={styles.bottomLabelContainer}>
          <ErrorLabel message={errorMessage} />
          <CharactersLengthCounter
            showCounter={shouldShowCharactersLengthCounter}
            length={value?.length}
            maxLength={maxLength}
            style={styles.maxLengthLabel}
          />
        </View>
      </View>
    </View>
  );
};

export default BaseInput;
