import { Action } from '@ngrx/store';

export enum LoadingActionTypes {
  SET_STATUS = '[Loading] Set Status',
}

export class SetLoadingStatus implements Action {

  public readonly type = LoadingActionTypes.SET_STATUS;

  constructor(public payload: boolean) {
  }

}

export type LoadingActions = SetLoadingStatus;
