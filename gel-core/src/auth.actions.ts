import { Action } from '@ngrx/store';

// Actions
export const LOGIN = 'Login';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAIL = '[Auth]   Login Error';

export const LOGOUT = 'Logout';
export const LOGOUT_SUCCESS = '[Auth] Logout Success';
export const LOGOUT_FAIL = '[Auth]   Logout Error';


// Create actions with or without payload
export class LoginAction implements Action {
  readonly type = LOGIN;
  constructor(public payload: any) {}
}

export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: any) { }
}

export class LoginFailAction implements Action {
  readonly type = LOGIN_FAIL;

  constructor(public payload: any) { }
}
export class LogoutAction implements Action {
  readonly type = LOGOUT;
  constructor(public payload: any) {}
}

export class LogoutSuccessAction implements Action {
  readonly type = LOGOUT_SUCCESS;

  constructor(public payload: any) { }
}

export class LogoutFailAction implements Action {
  readonly type = LOGOUT_FAIL;

  constructor(public payload: any) { }
}


// Export created actions
export type Actions =
  | LoginAction
  | LoginSuccessAction
  | LoginFailAction
  | LogoutAction
  | LogoutSuccessAction
  | LogoutFailAction;
