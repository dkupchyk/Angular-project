import {Action} from '@ngrx/store';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';

export type AuthActionsTypes = LogIn | LogOut | SingUp;

export class LogIn implements Action {
  readonly type = LOGIN;

  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
    }
  ) {
  }
}

export class LogOut implements Action {
  readonly type = LOGOUT;

  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
    }
  ) {
  }
}

export class SingUp implements Action {
  readonly type = SIGNUP;
}


