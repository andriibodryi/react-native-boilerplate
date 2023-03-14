import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { merge } from 'lodash';
import { persistReducer } from 'redux-persist';

import { securedReduxPersistStorage } from '@src/services/storage-manager-service';

import { AUTH_SLICE_NAME } from './constants';
import { AuthSliceTypes } from './auth-slice.types';

const initialState: AuthSliceTypes = {
  accessToken: '',
};

const userSlice = createSlice({
  initialState,
  name: AUTH_SLICE_NAME,
  reducers: {
    setAuthState: (state, { payload }: PayloadAction<AuthSliceTypes>) => {
      merge(state, payload);
    },
  },
});

export const authReducer = persistReducer(
  {
    key: AUTH_SLICE_NAME,
    storage: securedReduxPersistStorage,
  },
  userSlice.reducer,
);

export const { setAuthState } = userSlice.actions;
