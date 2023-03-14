import { api } from '@src/api/api';
import { User } from '@src/model';

import { GET_USER } from './constants';

export const { useGetUserQuery } = api.injectEndpoints({
  endpoints: build => ({
    getUser: build.query<User, any>({
      query: params => ({
        url: GET_USER,
        method: 'GET',
        params: params,
      }),
    }),
  }),
  overrideExisting: true,
});
