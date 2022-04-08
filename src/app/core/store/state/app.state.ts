import { RouterReducerState } from '@ngrx/router-store';

import { AuthState, initialState as initialAuthState } from './auth.state';
import { ErrorState, initialErrorState } from './error.state';
import { LoadingState, initialState as initialLoadingState } from './loading.state';
import { RoadmapsState } from './roadmaps.state';

export interface AppState {
  router?: RouterReducerState;
  auth: AuthState;

  roadmaps: RoadmapsState;

  error: ErrorState;
  loading: LoadingState;
}

export const initialState: AppState = {
  auth: initialAuthState,
  error: initialErrorState,
  loading: initialLoadingState,
  roadmaps: null,

};

export function getInitialState(): AppState {
  return initialState;
}
