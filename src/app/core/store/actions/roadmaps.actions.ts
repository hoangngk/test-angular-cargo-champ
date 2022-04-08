import { Action } from '@ngrx/store';

export enum RoadmapsActionTypes {
  GET_ALL_ROADMAPS_REQUEST = '[Roadmaps] Get All Roadmaps Request',
  GET_ALL_ROADMAPS_SUCCESS = '[Roadmaps] Get All Roadmaps Success',
  GET_ROADMAP_REQUEST = '[Roadmaps] Get Roadmap Request',
  GET_ROADMAP_SUCCESS = '[Roadmaps] Get Roadmap Success',
  GET_ROADMAP_FAIL = '[Roadmaps] Get Roadmap Fail',
  GET_ROADMAP_LIST_VIEW_REQUEST = '[Roadmaps] Get Roadmap List View Request',
  GET_ROADMAP_LIST_VIEW_SUCCESS = '[Roadmaps] Get Roadmap List View Success',
  GET_CONFIGURATION = '[Roadmaps] Get Configuration',
  CREATE_ROADMAP_REQUEST = '[Roadmaps] Create Roadmap Request',
  CREATE_ROADMAP_SUCCESS = '[Roadmaps] Create Roadmap Success',
  DUPLICATE_ROADMAP_REQUEST = '[Roadmaps] Duplicate Roadmap Request',
  DUPLICATE_ROADMAP_SUCCESS = '[Roadmaps] Duplicate Roadmap Success',
  DELETE_ROADMAP_REQUEST = '[Roadmaps] Delete Roadmap Request',
  DELETE_ROADMAP_SUCCESS = '[Roadmaps] Delete Roadmap Success',
  CHANGE_DEFAULT_VIEW_REQUEST = '[Roadmaps] Change Default View Request',
  CHANGE_DEFAULT_VIEW_SUCCESS = '[Roadmaps] Change Default View Success',
  UPDATE_NAME_REQUEST = '[Roadmaps] Update Name Request',
  UPDATE_NAME_SUCCESS = '[Roadmaps] Update Name Success',
  CHANGE_CONFIGURATION = '[Roadmaps] Change Configuration',
  SET_ROADMAPS = '[Roadmaps] Set Roadmaps',
  SET_CURRENT_ROADMAP = '[Roadmaps] Set Current Roadmap',
  UPDATE_ROADMAP_FIELD = '[Roadmaps] Update Current Roadmap Field',
  SHARE_ROADMAP_REQUEST = '[Roadmaps] Share Roadmap Request',
  SHARE_ROADMAP_SUCCESS = '[Roadmaps] Share Roadmap Success',
  UPDATE_SHARED_ROADMAP = '[Roadmaps] Update Shared Roadmap',
  DELETE_SHARED_ROADMAP = '[Roadmaps] Delete Shared Roadmap',
}

export class GetAllRoadmapsRequest implements Action {
  readonly type = RoadmapsActionTypes.GET_ALL_ROADMAPS_REQUEST;
}

export class GetAllRoadmapsSuccess implements Action {
  readonly type = RoadmapsActionTypes.GET_ALL_ROADMAPS_SUCCESS;
  // constructor(public payload: RoadmapShort[]) {
  constructor(public payload: any[]) {
  }
}



export class GetRoadmapFail implements Action {
  readonly type = RoadmapsActionTypes.GET_ROADMAP_FAIL;
}

export type RoadmapsActions =
  GetAllRoadmapsRequest | GetAllRoadmapsSuccess | GetRoadmapFail


