import { fork } from 'redux-saga/effects';
import loginSaga from './login';
import logoutSaga from './logout';

export default function* () {
  yield fork(loginSaga);
  yield fork(logoutSaga);
}
