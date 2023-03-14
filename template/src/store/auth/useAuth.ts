import { useCallback } from 'react';

import { useSignInMutation } from '@src/api/auth';
import { useSignUpMutation } from '@src/api/auth/sign-up.api';
import { useDispatch } from '@src/store/hooks';
import { SignIn, SignUp } from '@src/model';
import { setAuthState } from '@src/store/auth/slice';

export const useAuth = () => {
  const dispatch = useDispatch();

  const [signInAction, { isLoading: isLoadingSignIn }] = useSignInMutation();
  const [signUpAction, { isLoading: isLoadingSignUp }] = useSignUpMutation();

  const signIn = useCallback(
    async (data: SignIn) => {
      const auth = await signInAction(data).unwrap();
      dispatch(setAuthState(auth));
    },
    [dispatch, signInAction],
  );

  const signUp = useCallback(
    async (data: SignUp) => {
      const auth = await signUpAction(data).unwrap();
      dispatch(setAuthState(auth));
    },
    [dispatch, signUpAction],
  );

  return {
    signIn,
    signUp,
    isLoadingSignIn,
    isLoadingSignUp,
  };
};
