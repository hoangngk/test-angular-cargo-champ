import { AuthState, initialState } from '../state/auth.state';
import { AuthActions, AuthActionTypes } from '../actions/auth.actions';

export function authReducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: {...action.payload}
      };
    case AuthActionTypes.SET_USER:
      return {
        ...state,
        user: {...action.payload, jwt: state.user.jwt}
      };
    case AuthActionTypes.UPDATE_PHOTO:
      return {
        ...state,
        user: {...state.user, user_photo: action.payload}
      };
    case AuthActionTypes.SIGN_OUT:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
}
