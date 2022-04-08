// import {
//   Roadmap,
//   RoadmapListView,
//   RoadmapShort,
// } from '../../interfaces';

export interface RoadmapsState {
  roadmaps: any[];
  currentRoadmap: any;
  currentRoadmapListView: any;
}

export const initialState: RoadmapsState = {
  roadmaps: [],
  currentRoadmap: null,
  currentRoadmapListView: null,
};
