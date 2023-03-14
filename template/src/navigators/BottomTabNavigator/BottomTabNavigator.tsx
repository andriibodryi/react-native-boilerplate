import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { Icon, Text } from '@src/components';
import { useStyleConfig } from '@src/styles/useStyleConfig';
import { bottomTabs } from '@src/navigators/BottomTabNavigator/tabs';

import { useBottomTabStyles } from './bottomTabNavigator.styles';
import { BottomTabItem } from './types';

const { Navigator, Screen } = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const { tabBarStyle } = useBottomTabStyles();
  const { colors } = useStyleConfig();

  return (
    <Navigator
      backBehavior="history"
      screenOptions={{
        tabBarActiveTintColor: colors.grey_07,
        tabBarInactiveTintColor: colors.grey_03,
        headerShown: false,
        tabBarStyle: {
          ...tabBarStyle,
        },
      }}
    >
      {bottomTabs.map((tab: BottomTabItem) => {
        const { name, label, component, iconName } = tab;
        const tabBarLabel: BottomTabNavigationOptions['tabBarLabel'] = ({
          focused,
        }) => (
          <Text
            preset={'textSmMedium'}
            color={focused ? 'primary' : 'secondary'}
          >
            {label}
          </Text>
        );
        const tabBarIcon: BottomTabNavigationOptions['tabBarIcon'] = ({
          focused,
        }) => (
          <Icon
            name={iconName}
            color={focused ? colors.grey_07 : colors.grey_03}
          />
        );

        return (
          <Screen
            key={name}
            name={name}
            component={component}
            options={{
              tabBarLabel,
              tabBarIcon,
            }}
          />
        );
      })}
    </Navigator>
  );
};
