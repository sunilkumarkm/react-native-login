import { take, call, put, fork } from 'redux-saga/effects';
import { types } from '../reducers/login';
import { api } from '../api/apiService';
import { login } from '../api/loginApi';
import NavigationService from '../utils/NavigationService';
import { NotificationAlert } from '../utils/UtilityFunctions';

export function* watchLoginRequest() {
  while (true) {
    // we're listening for `LOGIN_REQUEST` actions and destructuring its payload
    const { values } = yield take(types.LOGIN_REQUEST);
    try {
      const response = yield call(login, values);
      console.log('login res', response);
      if (response.data && response.ok === true) {
        const { payload } = response.data;
        yield put({ type: types.LOGIN_SUCCESS, payload });
        api.setHeader('Authorization', `Bearer ${payload.access_token}`);
        NavigationService.navigate('App');
      } else {
        throw response;
      }
    } catch (error) {
      const errorMsg = error.data.error.message || error.originalError;
      yield put({ type: types.LOGIN_FAILURE, payload: errorMsg });
      NotificationAlert('Login Error', errorMsg);
    }
  }
}

export default function* loginSaga() {
  yield fork(watchLoginRequest);
}
