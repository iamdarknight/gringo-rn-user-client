// @flow
import {
  applyMiddleware,
  createStore,
  // compose,
} from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import { composeWithDevTools } from 'redux-devtools-extension';

import type { Store } from '../types';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
};

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
  timestamps: true,
  duration: true,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const gringoStore = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware( logger, sagaMiddleware )),
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(gringoStore);
