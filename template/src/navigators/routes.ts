import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum Routes {
  LOGIN_NAVIGATOR = 'LOGIN_NAVIGATOR',
  LOGIN = 'LOGIN',

  BOTTOM_TAB_NAVIGATOR = 'BOTTOM_TAB_NAVIGATOR',

  CREATE_ACCOUNT = 'CREATE_ACCOUNT',
  PROFILE_DETAILS = 'PROFILE_DETAILS',
}

export type RouteTypes = NativeStackNavigationProp<{
  [Routes.CREATE_ACCOUNT]: undefined;
  [Routes.BOTTOM_TAB_NAVIGATOR]: undefined;
  [Routes.PROFILE_DETAILS]: { id?: string };
}>;
