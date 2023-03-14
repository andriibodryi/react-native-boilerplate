import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { HeaderProps } from '@src/components/header/header.types';

import { Header } from '../components';

export const useHeader = (headerProps: HeaderProps) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => (
        <Header
          leftIcon="caretLeft"
          onLeftPress={navigation.goBack}
          {...headerProps}
        />
      ),
    });
  }, [headerProps, navigation]);
};
