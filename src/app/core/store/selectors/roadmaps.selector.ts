import { createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { RoadmapsState } from '../state/roadmaps.state';

const selectRoadmaps = (state: AppState) => state.roadmaps;

export const selectAllRoadmaps = createSelector(
  selectRoadmaps,
  (state: RoadmapsState) => state.roadmaps
);

export const selectCurrentRoadmap = createSelector(
  selectRoadmaps,
  (state: RoadmapsState) => state.currentRoadmap
);

export const selectCurrentRoadmapListView = createSelector(
  selectRoadmaps,
  (state: RoadmapsState) => state.currentRoadmapListView
);
