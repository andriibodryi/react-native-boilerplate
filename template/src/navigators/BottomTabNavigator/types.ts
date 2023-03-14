import { FC } from 'react';

import { IconTypes } from '@src/components/icon/icon.types';

export interface TabBarIconProps {
  icon: string;
  focused: boolean;
}
export interface BottomTabItem {
  name: string;
  label: string;
  component: FC;
  iconName: IconTypes;
}
