import { CommonActions } from '@react-navigation/native';
import { useCallback } from 'react';

import { useNavigation } from '@src/hooks/useNavigation';
import { Routes } from '@src/navigators/routes';

export const useDropNavigationToScreen = () => {
  const navigation = useNavigation();
  return useCallback(
    (route: Routes, { index = 0, previousRoutes = [] } = {}) => {
      navigation.dispatch(
        CommonActions.reset({
          index: index,
          routes: [...previousRoutes, { name: route }],
        }),
      );
    },
    [navigation],
  );
};
