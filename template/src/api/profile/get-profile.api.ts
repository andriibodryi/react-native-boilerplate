import { api } from '@src/api/api';
import { User } from '@src/model';

import { GET_PROFILE } from './constants';

export const { useGetProfileQuery } = api.injectEndpoints({
  endpoints: build => ({
    getProfile: build.query<User, any>({
      query: params => ({
        url: GET_PROFILE,
        method: 'GET',
        params: params,
      }),
    }),
  }),
  overrideExisting: true,
});
