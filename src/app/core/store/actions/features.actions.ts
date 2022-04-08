import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Feature } from '../../interfaces';

export enum FeaturesActionTypes {
  GET_ALL_FEATURES_REQUEST = '[Features] Get All Features Request',
  GET_ALL_FEATURES_SUCCESS = '[Features] Get All Features Success',
  CREATE_FEATURE_REQUEST = '[Features] Create Feature Request',
  CREATE_MULTIPLE_FEATURE_REQUEST = '[Features] Create Multiple Feature Request',
  CREATE_FEATURE_SUCCESS = '[Features] Create Feature Success',
  CREATE_MULTIPLE_FEATURE_SUCCESS = '[Features] Create Multiple Feature Success',
  UPDATE_FEATURE_REQUEST = '[Features] Update Feature Request',
  UPDATE_FEATURE_SUCCESS = '[Features] Update Feature Success',
  UPDATE_FEATURE_MULTI_REQUEST = '[Features] Update Feature Multi Request',
  UPDATE_FEATURE_MULTI_SUCCESS = '[Features] Update Feature Multi Success',
  DELETE_FEATURE_REQUEST = '[Features] Delete Feature Request',
  DELETE_FEATURE_SUCCESS = '[Features] Delete Feature Success',
  SET_FEATURES = '[Features] Set Features',
  TOGGLE_MULTIPLE_SELECT = '[Features] Toggle Multiple Select',
  SELECT_FEATURE = '[Features] Select Feature',
  UNSELECT_FEATURE = '[Features] Unselect Feature',
  REMOVE_SELECTED_FEATURES = '[Features] Remove Selected Features',
}

export class GetAllFeaturesRequest implements Action {
  readonly type = FeaturesActionTypes.GET_ALL_FEATURES_REQUEST;

  constructor(public payload: { roadmapId: string }) {
  }
}

export class GetAllFeaturesSuccess implements Action {
  readonly type = FeaturesActionTypes.GET_ALL_FEATURES_SUCCESS;

  constructor(public payload: Feature[]) {
  }
}

export class CreateFeatureRequest implements Action {
  readonly type = FeaturesActionTypes.CREATE_FEATURE_REQUEST;

  constructor(public payload: { data: any, successCallback?: () => void }) {
  }
}

export class CreateMultipleFeatureRequest implements Action {
  readonly type = FeaturesActionTypes.CREATE_MULTIPLE_FEATURE_REQUEST;

  constructor(public payload: { data: any, successCallback?: () => void }) {
  }
}

export class CreateFeatureSuccess implements Action {
  readonly type = FeaturesActionTypes.CREATE_FEATURE_SUCCESS;

  constructor(public payload: Feature) {
  }
}

export class CreateMultipleFeatureSuccess implements Action {
  readonly type = FeaturesActionTypes.CREATE_MULTIPLE_FEATURE_SUCCESS;

  constructor(public payload: Feature[]) {
  }
}

export class UpdateFeatureRequest implements Action {
  readonly type = FeaturesActionTypes.UPDATE_FEATURE_REQUEST;

  constructor(public payload: { data: any, successCallback?: () => void }) {
  }
}

export class UpdateFeatureMultiRequest implements Action {
  readonly type = FeaturesActionTypes.UPDATE_FEATURE_MULTI_REQUEST;

  constructor(public payload: { data: any, successCallback?: () => void }) {
  }
}

export class UpdateFeatureSuccess implements Action {
  readonly type = FeaturesActionTypes.UPDATE_FEATURE_SUCCESS;

  constructor(public payload: Update<Feature>) {
  }
}
export class UpdateFeatureMultiSuccess implements Action {
  readonly type = FeaturesActionTypes.UPDATE_FEATURE_MULTI_SUCCESS;

  constructor(public payload: Update<Feature>[]) {
  }
}

export class DeleteFeatureRequest implements Action {
  readonly type = FeaturesActionTypes.DELETE_FEATURE_REQUEST;

  constructor(public payload: { featureId: string, roadmapId?: string; fieldId?: string, successCallback?: () => void }) {
  }
}

export class DeleteFeatureSuccess implements Action {
  readonly type = FeaturesActionTypes.DELETE_FEATURE_SUCCESS;

  constructor(public payload: { featureId: string }) {
  }
}

export class SetFeatures implements Action {
  readonly type = FeaturesActionTypes.SET_FEATURES;

  constructor(public payload: Feature[]) {
  }
}

export class ToggleMultipleSelect implements Action {
  readonly type = FeaturesActionTypes.TOGGLE_MULTIPLE_SELECT;
}

export class SelectFeature implements Action {
  readonly type = FeaturesActionTypes.SELECT_FEATURE;

  constructor(public payload: { featureId: Feature }) {
  }
}

export class UnselectFeature implements Action {
  readonly type = FeaturesActionTypes.UNSELECT_FEATURE;

  constructor(public payload: { featureId: string }) {
  }
}

export class RemoveSelectedFeatures implements Action {
  readonly type = FeaturesActionTypes.REMOVE_SELECTED_FEATURES;
}

export type FeaturesActions =
  GetAllFeaturesRequest | GetAllFeaturesSuccess |
  CreateFeatureRequest | CreateMultipleFeatureRequest |
  CreateFeatureSuccess | CreateMultipleFeatureSuccess |
  UpdateFeatureRequest | UpdateFeatureSuccess |
  UpdateFeatureMultiRequest | UpdateFeatureMultiSuccess |
  DeleteFeatureRequest | DeleteFeatureSuccess |
  SetFeatures | ToggleMultipleSelect |
  SelectFeature | UnselectFeature | RemoveSelectedFeatures;

