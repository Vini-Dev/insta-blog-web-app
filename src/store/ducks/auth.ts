import { createActions, createReducer } from 'reduxsauce';

/* Types & Actions Creators */
export const { Types, Creators } = createActions({
  authFailure: [],
  authSuccess: ['token', 'user'],
  authLogout: [],
  authUpdateUser: ['user'],
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

const authUpdateUser = (state, { user }) => ({
  ...state,
  user: { ...state.user, ...user },
});

/* Reducers to types */
const reducer = createReducer(INITIAL_STATE, {
  [Types.AUTH_FAILURE]: authFailure,
  [Types.AUTH_SUCCESS]: authSuccess,
  [Types.AUTH_LOGOUT]: authLogout,
  [Types.AUTH_UPDATE_USER]: authUpdateUser,
});

export default reducer;
