import { RootState } from '@src/store/store';

const selectRootAuth = (state: RootState) => state.auth;

export const selectAccessToken = (state: RootState) =>
  selectRootAuth(state).accessToken;
