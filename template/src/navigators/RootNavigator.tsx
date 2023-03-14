import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useScreenAnalytics } from '@src/services/analytics/use-screen-analytics.hook';

import { navigationRef } from './navigators.constants';
import { MainNavigator } from './MainNavigator';

export const RootNavigator: React.FC = () => {
  const { trackOpenScreenAnalytics } = useScreenAnalytics();

  const handleStateChange = () => {
    trackOpenScreenAnalytics();
  };
  return (
    <NavigationContainer onStateChange={handleStateChange} ref={navigationRef}>
      <MainNavigator />
    </NavigationContainer>
  );
};
