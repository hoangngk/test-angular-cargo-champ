import { ErrorActions, ErrorActionTypes } from "../actions/error.actions";

export function errorReducer(state: any = null, action: ErrorActions) {
  switch (action.type) {

    case ErrorActionTypes.ADD_GLOBAL_ERROR: {
      return action.payload;
    }
    case ErrorActionTypes.REMOVE_ERROR: {
      return {
        ...state,
        error: null
      };
    }
    default:
      return state;
  }
}

