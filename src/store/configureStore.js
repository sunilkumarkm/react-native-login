"use strict";

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to AsyncStorage
import rootReducer from "../reducers";
import rootSaga from '../sagas';

const persistConfig = {
  key: 'root',
  storage,
}

const middlewares = [];
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger');
  const logger = createLogger({
    predicate: (getState, action) => !action.type.includes('@redux-form'),
  });
  middlewares.push(logger);
}

export default function configureStore() {
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer, applyMiddleware(...middlewares));
  const persistor = persistStore(store);
  // then run the saga
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
}