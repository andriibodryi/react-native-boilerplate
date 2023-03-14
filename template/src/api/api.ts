import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

import { RootState } from '@src/store/store';
import { selectAccessToken } from '@src/store/auth/selectors';

import { API_CONFIG } from './api.config';

const baseQuery = fetchBaseQuery({
  baseUrl: API_CONFIG.BASE_URL,
  prepareHeaders: async (headers, api) => {
    headers.set('source', 'mobile');

    const AccessToken = selectAccessToken(api.getState() as RootState);
    if (AccessToken) {
      headers.set('Authorization', `Bearer ${AccessToken}`);
    }
    return headers;
  },
});

const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  return baseQuery(args, api, extraOptions);
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  tagTypes: ['AUTH', 'USER'],
  refetchOnMountOrArgChange: 5,
  endpoints: () => ({}),
});
