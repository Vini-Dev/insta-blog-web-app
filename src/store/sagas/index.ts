import { all, takeLatest } from 'redux-saga/effects';
import { Types as AuthTypes } from 'src/store/ducks/auth';

import { authSetToken, authLogout, authSuccess } from './auth';

function* rootSaga(): Generator {
  return yield all([
    takeLatest('persist/REHYDRATE', authSetToken),
    takeLatest(AuthTypes.AUTH_LOGOUT, authLogout),
    takeLatest(AuthTypes.AUTH_SUCCESS, authSuccess),
  ]);
}

export default rootSaga;
