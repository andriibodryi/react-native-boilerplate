import { useCallback } from 'react';

import { useGetUserQuery, useUpdateUserMutation } from '@src/api/user';
import { User } from '@src/model';

export const useUser = () => {
  const { data: user, isLoading: isLoadingUser } = useGetUserQuery('');
  const [updateUserAction, { isLoading: isLoadingUpdateUser }] =
    useUpdateUserMutation();

  const updateUser = useCallback(
    (userData: User) => updateUserAction(userData).unwrap(),
    [updateUserAction],
  );

  return {
    user,
    isLoadingUser,
    isLoadingUpdateUser,
    updateUser,
  };
};
