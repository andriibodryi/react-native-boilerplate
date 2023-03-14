import { api } from '@src/api/api';
import { User } from '@src/model';

import { UPDATE_PROFILE } from './constants';

export const { useUpdateProfileMutation } = api.injectEndpoints({
  endpoints: build => ({
    updateProfile: build.mutation<User, User>({
      query: user => ({
        url: UPDATE_PROFILE,
        method: 'POST',
        body: user,
      }),
    }),
  }),
  overrideExisting: true,
});
