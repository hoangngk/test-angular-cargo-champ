// import { Action } from '@ngrx/store';
// // import { Update } from '@ngrx/entity';
// // import {FeaturesActionTypes} from 'src/app/core/store/actions/features.actions';

// // import { Field } from '../../interfaces';
// import { HttpErrorResponse } from '@angular/common/http';

// export enum FieldsActionTypes {
//   CREATE_FIELD_REQUEST = '[Fields] Create Field Request',
//   CREATE_MULTIPLE_FIELD_REQUEST = '[Fields] Create Multiple Field Request',
//   CREATE_FIELD_SUCCESS = '[Fields] Create Field Success',
//   CREATE_MULTIPLE_FIELD_SUCCESS = '[Fields] Create Multiple Field Success',
//   CREATE_MULTIPLE_FIELD_FAIL = '[Fields] Create Multiple Field Fail',
//   UPDATE_FIELD_REQUEST = '[Fields] Update Field Request',
//   UPDATE_MULTIPLE_FIELD_REQUEST = '[Fields] Update Multiple Field Request',
//   UPDATE_FIELD_SUCCESS = '[Fields] Update Field Success',
//   UPDATE_MULTIPLE_FIELD_SUCCESS = '[Fields] Update Multiple Field Success',
//   DELETE_FIELD_REQUEST = '[Fields] Delete Field Request',
//   DELETE_FIELD_SUCCESS = '[Fields] Delete Field Success',
//   SET_FIELDS = '[Fields] Set Fields',
// }

// export class CreateFieldRequest implements Action {
//   readonly type = FieldsActionTypes.CREATE_FIELD_REQUEST;

//   constructor(public payload: { data: any, successCallback?: (field: Field) => void }) {
//   }
// }
// export class CreateMultipleFieldRequest implements Action {
//   readonly type = FieldsActionTypes.CREATE_MULTIPLE_FIELD_REQUEST;

//   constructor(public payload: { data: any, successCallback?: (field: Field[]) => any, error?: (error) => any }) {
//   }
// }

// export class CreateFieldSuccess implements Action {
//   readonly type = FieldsActionTypes.CREATE_FIELD_SUCCESS;

//   constructor(public payload: Field) {
//   }
// }

// export class CreateMultipleFieldSuccess implements Action {
//   readonly type = FieldsActionTypes.CREATE_MULTIPLE_FIELD_SUCCESS;

//   constructor(public payload: Field[]) {
//   }
// }
// export class CreateMultipleFieldFail implements Action {
//   readonly type = FieldsActionTypes.CREATE_MULTIPLE_FIELD_FAIL;

//   constructor(public error: HttpErrorResponse) {
//   }
// }

// export class UpdateFieldRequest implements Action {
//   readonly type = FieldsActionTypes.UPDATE_FIELD_REQUEST;

//   constructor(public payload: { data: any, successCallback?: (field: Field) => void }) {
//   }
// }

// export class UpdateMultipleFieldRequest implements Action {
//   readonly type = FieldsActionTypes.UPDATE_MULTIPLE_FIELD_REQUEST;

//   constructor(public payload: { data: any, successCallback?: (field: Field[]) => void }) {
//   }
// }

// export class UpdateMultipleFieldSuccess implements Action {
//   readonly type = FieldsActionTypes.UPDATE_MULTIPLE_FIELD_SUCCESS;

//   constructor(public payload: Field[]) {
//   }
// }

// export class UpdateFieldSuccess implements Action {
//   readonly type = FieldsActionTypes.UPDATE_FIELD_SUCCESS;

//   constructor(public payload: Update<Field>) {
//   }
// }

// export class DeleteFieldRequest implements Action {
//   readonly type = FieldsActionTypes.DELETE_FIELD_REQUEST;

//   constructor(public payload: { roadmapId: string, fieldId: string, successCallback?: () => void }) {
//   }
// }

// export class DeleteFieldSuccess implements Action {
//   readonly type = FieldsActionTypes.DELETE_FIELD_SUCCESS;

//   constructor(public payload: { fieldId: string }) {
//   }
// }

// export class SetFields implements Action {
//   readonly type = FieldsActionTypes.SET_FIELDS;

//   constructor(public payload: Field[]) {
//   }
// }

// export type FieldsActions =
//   CreateFieldRequest | CreateMultipleFieldRequest | CreateFieldSuccess | CreateMultipleFieldFail |
//   UpdateFieldRequest | UpdateMultipleFieldRequest | UpdateMultipleFieldSuccess | UpdateFieldSuccess | CreateMultipleFieldSuccess |
//   DeleteFieldRequest | DeleteFieldSuccess |
//   SetFields;

