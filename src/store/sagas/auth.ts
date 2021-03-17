import { call, put } from 'redux-saga/effects';
import api from 'src/services/api';
import { Creators as AuthActions } from 'src/store/ducks/auth';

interface AuthSetTokenParams {
  payload: {
    auth: {
      token: string;
      user: {
        _id: string;
      };
    };
  };
  type: string;
}

export function* authSetToken({ payload }: AuthSetTokenParams): Generator {
  if (payload) {
    const { token, user } = payload.auth;

    if (token) {
      api.defaults.headers.Authorization = token;

      const { data }: any = yield call(api.get, `/users/${user._id}`);

      yield put(AuthActions.authUpdateUser(data));
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
  api.defaults.headers.Authorization = '';
}
