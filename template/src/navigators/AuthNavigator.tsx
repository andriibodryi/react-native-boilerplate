import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes } from './routes';
import { Login, CreateAccount } from '../screens/auth';

const Stack = createNativeStackNavigator();

export const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.LOGIN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        options={{ title: 'LOGIN' }}
        name={Routes.LOGIN}
        component={Login}
      />
      <Stack.Screen
        options={{ title: 'Create new account' }}
        name={Routes.CREATE_ACCOUNT}
        component={CreateAccount}
      />
    </Stack.Navigator>
  );
};
