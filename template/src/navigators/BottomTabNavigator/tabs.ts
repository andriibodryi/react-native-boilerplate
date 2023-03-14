import { Profile } from '@src/screens/profile';
import { Routes } from '@src/navigators/routes';

import { BottomTabItem } from './types';

export const bottomTabs: BottomTabItem[] = [
  {
    name: Routes.PROFILE_DETAILS,
    label: 'profile',
    component: Profile,
    iconName: 'github',
  },
];
