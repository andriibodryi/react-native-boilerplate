import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthNavigator } from '@src/navigators/AuthNavigator';
import { Profile } from '@src/screens/profile';
import { BottomTabNavigator } from '@src/navigators/BottomTabNavigator/BottomTabNavigator';

import { Routes } from './routes';

const Stack = createNativeStackNavigator();

export const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.LOGIN_NAVIGATOR}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.LOGIN_NAVIGATOR} component={AuthNavigator} />
      <Stack.Screen name={Routes.PROFILE_DETAILS} component={Profile} />
      <Stack.Screen
        name={Routes.BOTTOM_TAB_NAVIGATOR}
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
};
