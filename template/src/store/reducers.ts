import { authReducer, AUTH_SLICE_NAME } from './auth';
import { USER_SLICE_NAME, userReducer } from './user';

export const reducers = {
  [USER_SLICE_NAME]: userReducer,
  [AUTH_SLICE_NAME]: authReducer,
};
