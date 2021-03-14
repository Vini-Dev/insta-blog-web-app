import { createActions, createReducer } from 'reduxsauce';

/* Types & Actions Creators */
export const { Types, Creators } = createActions({
  authFailure: [],
  authSuccess: ['token', 'user'],
  authLogout: [],
});

interface AuthState {
  readonly token: string | null;
  readonly isAuthenticated: boolean;
  readonly loading: boolean;
  readonly user: {
    name: string;
  } | null;
}

/* Initial State */
const INITIAL_STATE: AuthState = {
  token: null,
  isAuthenticated: false,
  loading: false,
  user: null,
};

/* Reducers */
const authFailure = () => INITIAL_STATE;

const authSuccess = (state, { token, user }) => ({
  ...INITIAL_STATE,
  isAuthenticated: true,
  token,
  user,
});

const authLogout = () => INITIAL_STATE;

/* Reducers to types */
const reducer = createReducer(INITIAL_STATE, {
  [Types.AUTH_FAILURE]: authFailure,
  [Types.AUTH_SUCCESS]: authSuccess,
  [Types.AUTH_LOGOUT]: authLogout,
});

export default reducer;
