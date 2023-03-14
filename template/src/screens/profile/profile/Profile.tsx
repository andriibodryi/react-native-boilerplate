import React from 'react';

import { Screen, Text, ListItem } from '@src/components';
import { UserService } from '@src/model/user/UserService';
import { useUser } from '@src/store/user';
import { useHeader } from '@src/hooks/useHeader';

import { styles } from './profile.styles';

export const Profile: React.FC = () => {
  const { user } = useUser();
  useHeader({
    title: 'Login',
  });

  return (
    <Screen preset={'fixed'} style={styles.container}>
      <Text style={styles.title}>{UserService.getName(user)}</Text>
      <ListItem label={'Test'} />
      <ListItem label={'Test2'} />
    </Screen>
  );
};
