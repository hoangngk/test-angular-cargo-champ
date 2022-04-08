import {Action} from '@ngrx/store';

export enum ErrorActionTypes {
  ADD_GLOBAL_ERROR = '[Error] Add Global Error',
  REMOVE_ERROR = '[Error] Remove Error'
}

export class AddGlobalError implements Action {
  readonly type = ErrorActionTypes.ADD_GLOBAL_ERROR;
  constructor(public payload: any) {}
}

export class RemoveError implements Action {
  readonly type = ErrorActionTypes.REMOVE_ERROR;
  constructor(public payload: null) {}
}

export type ErrorActions = AddGlobalError | RemoveError;


