import { Action } from '@ngrx/store';
import { Identity } from '../../interfaces';

export enum AuthActionTypes {
  SIGN_UP_REQUEST = '[Auth] Sign Up Request',
  SIGN_UP_SUCCESS = '[Auth] Sign Up Success',
  SIGN_UP_INVITE_REQUEST = '[Auth] Sign Up Invite Request',
  SIGN_UP_INVITE_SUCCESS = '[Auth] Sign Up Invite Success',
  SAVE_DETAILS_REQUEST = '[Auth] Save Details Request',
  SAVE_DETAILS_SUCCESS = '[Auth] Save Details Success',
  SIGN_IN_REQUEST = '[Auth] Sign In Request',
  SIGN_IN_SUCCESS = '[Auth] Sign In Success',
  SIGN_OUT = '[Auth] Sign Out',
  SET_USER = '[Auth] Set User',
  UPDATE_PHOTO = '[Auth] Update Photo',
}

export class SignUpRequest implements Action {
  readonly type = AuthActionTypes.SIGN_UP_REQUEST;

  constructor(public payload: { email: string, successCallback?: () => void }) {
  }
}

export class SignUpSuccess implements Action {
  readonly type = AuthActionTypes.SIGN_UP_SUCCESS;

  constructor(public payload: { email: string, token: string }) {
  }
}

export class SaveDetailsRequest implements Action {
  readonly type = AuthActionTypes.SAVE_DETAILS_REQUEST;

  constructor(public payload: any) {
  }
}

export class SaveDetailsSuccess implements Action {
  readonly type = AuthActionTypes.SAVE_DETAILS_SUCCESS;
}

export class SignUpInviteRequest implements Action {
  readonly type = AuthActionTypes.SIGN_UP_INVITE_REQUEST;

  constructor(public payload: any) {
  }
}

export class SignInRequest implements Action {
  readonly type = AuthActionTypes.SIGN_IN_REQUEST;

  constructor(public payload: { email: string, pass: string }) {
  }
}

export class SignInSuccess implements Action {
  readonly type = AuthActionTypes.SIGN_IN_SUCCESS;

  constructor(public payload: Identity) {
  }
}

export class SignOut implements Action {
  readonly type = AuthActionTypes.SIGN_OUT;
}

export class SetUser implements Action {
  readonly type = AuthActionTypes.SET_USER;

  constructor(public payload: Identity) {
  }
}

export class UpdatePhoto implements Action {
  readonly type = AuthActionTypes.UPDATE_PHOTO;

  constructor(public payload: string) {
  }
}

export type AuthActions =
  SignUpRequest | SignUpSuccess |
  SignInRequest | SignInSuccess |
  SaveDetailsRequest | SaveDetailsSuccess |
  SignOut | SetUser | UpdatePhoto;
