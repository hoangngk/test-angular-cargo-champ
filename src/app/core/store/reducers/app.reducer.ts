import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { AppState } from '../state/app.state';

import { authReducer } from './auth.reducer';

import { loadingReducer } from './loading.reducer';
import { errorReducer } from './error.reducer';

export const appReducer: ActionReducerMap<AppState> = {
  router: routerReducer,
  auth: authReducer,
  error: errorReducer,
  loading: loadingReducer,
  roadmaps: routerReducer,

};
