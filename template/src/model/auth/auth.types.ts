import { User } from '@src/model';

export interface SignIn {
  password: string;
  username: string;
}

export interface SignInResponse {
  accessToken: string;
}

export interface SignUp {
  password: string;
  username: string;
}

export interface SignUpResponse extends User {}
