import { api } from '@src/api/api';
import { SignInResponse, SignUp } from '@src/model';

import { SIGN_UP } from './constants';

export const { useSignUpMutation } = api.injectEndpoints({
  endpoints: build => ({
    signUp: build.mutation<SignInResponse, SignUp>({
      query: body => ({
        url: SIGN_UP,
        method: 'POST',
        body: body,
      }),
    }),
  }),
  overrideExisting: true,
});
