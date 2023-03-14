import { User } from './user.types';

const getName = (user: User | undefined) => {
  return user?.name?.trim() || '';
};

export const UserService = {
  getName,
};
