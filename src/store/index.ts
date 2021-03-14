import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './ducks';
import rootSaga from './sagas';

const persistConfig = {
  key: 'vivaldo-admin-app',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const composer = compose(applyMiddleware(sagaMiddleware));

const store = createStore(persistedReducer, composer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
