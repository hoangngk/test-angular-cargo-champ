import { Identity } from '../../interfaces';

export interface AuthState {
  user: Identity;
}

export const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem('identity'))
};
