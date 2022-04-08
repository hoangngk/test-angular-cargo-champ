import { createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { AuthState } from '../state/auth.state';

const selectAuth = (state: AppState) => state.auth;

export const selectUser = createSelector(
  selectAuth,
  (state: AuthState) => state.user
);
