import { api } from '@src/api/api';
import { User } from '@src/model';

import { UPDATE_USER } from './constants';

export const { useUpdateUserMutation } = api.injectEndpoints({
  endpoints: build => ({
    updateUser: build.mutation<User, User>({
      invalidatesTags: ['USER'],
      query: user => ({
        url: UPDATE_USER,
        method: 'POST',
        body: user,
      }),
    }),
  }),
  overrideExisting: true,
});
