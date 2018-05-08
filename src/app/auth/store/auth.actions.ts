import { Action } from '@ngrx/store'
import { User, Authenticate } from '@app/models/user'

export const LOGIN          = '[Auth] login'
export const LOGOUT         = '[Auth] logout'
export const LOGIN_SUCCESS  = '[Auth] login success'
export const LOGIN_FAILURE  = '[Auth] login failure'
export const LOGIN_REDIRECT = '[Auth] login redirect'



export class Login implements Action {
  readonly type = LOGIN
  constructor(public payload: Authenticate) {}
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS
  constructor(public payload: {user: User}) { }
}


export class LoginFailure implements Action {
  readonly type = LOGIN_FAILURE

  constructor(public payload: any) {}
}

export class LoginRedirect implements Action {
  readonly type = LOGIN_REDIRECT
}

export class Logout implements Action {
  readonly type = LOGOUT
}

export type AuthActions =
  | Login
  | LoginSuccess
  | LoginFailure
  | LoginRedirect
  | Logout
