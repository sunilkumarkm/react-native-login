import { fork, all } from 'redux-saga/effects';

import loginSaga from './loginSaga';

// Consider using takeEvery
export default function* rootSaga() {
  yield all([
    fork(loginSaga)
  ]);
}
