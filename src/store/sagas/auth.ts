import { call, put } from 'redux-saga/effects';
import api from 'src/services/api';
import { Creators as AuthActions } from 'src/store/ducks/auth';

interface AuthSetTokenParams {
  payload: {
    auth: {
      token: string;
    };
  };
  type: string;
}

export function* authSetToken({ payload }: AuthSetTokenParams): Generator {
  if (payload) {
    const { token } = payload.auth;

    if (token) {
      api.defaults.headers.Authorization = token;
    } else {
      yield put(AuthActions.authLogout());
    }
  }
}

interface AuthSuccessParams {
  token: string;
  type: string;
}

export function* authSuccess({ token }: AuthSuccessParams): Generator {
  api.defaults.headers.Authorization = token;
}

export function* authLogout(): Generator {
  try {
    yield call(api.delete, '/admin/logout');

    api.defaults.headers.Authorization = '';
  } catch (error) {}
}
