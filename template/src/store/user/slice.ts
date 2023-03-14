import { createSlice } from '@reduxjs/toolkit';

import { USER_SLICE_NAME } from './constants';

const initialState = {};

const userSlice = createSlice({
  initialState,
  name: USER_SLICE_NAME,
  reducers: {},
});

export const userReducer = userSlice.reducer;
