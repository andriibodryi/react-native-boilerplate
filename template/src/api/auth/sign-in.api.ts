import { api } from '@src/api/api';
import { SignIn, SignInResponse } from '@src/model';

import { SIGN_IN } from './constants';

export const { useSignInMutation } = api.injectEndpoints({
  endpoints: build => ({
    signIn: build.mutation<SignInResponse, SignIn>({
      query: body => ({
        url: SIGN_IN,
        method: 'POST',
        body: body,
      }),
    }),
  }),
  overrideExisting: true,
});
