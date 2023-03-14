import { SignUp } from '@src/model';

export enum Fields {
  USERNAME = 'username',
  PASSWORD = 'password',
}

export type FormType = {
  [Fields.USERNAME]: string;
  [Fields.PASSWORD]: string;
};

export const DEFAULT_FORM_VALUES: SignUp = {
  username: '',
  password: '',
};
