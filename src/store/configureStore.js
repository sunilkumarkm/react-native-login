import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to AsyncStorage
import rootReducer from "../reducers";

const persistConfig = {
  key: 'root',
  storage,
}

const middlewares = [];

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
  return { store, persistor };
}