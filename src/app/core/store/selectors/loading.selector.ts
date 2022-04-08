import { createSelector } from '@ngrx/store';

import { LoadingState } from '../state/loading.state';
import { AppState } from '../state/app.state';

const selectLoadingStatus = (state: AppState) => state.loading;

export const selectLoading = createSelector(
  selectLoadingStatus,
  (state: LoadingState) => state.status,
);
