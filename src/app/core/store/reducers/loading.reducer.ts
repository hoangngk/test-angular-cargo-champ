import { initialState, LoadingState } from '../state/loading.state';
import { LoadingActions, LoadingActionTypes } from '../actions/loading.actions';

export function loadingReducer(state: LoadingState = initialState, action: LoadingActions): LoadingState {
  switch (action.type) {
    case LoadingActionTypes.SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
}
