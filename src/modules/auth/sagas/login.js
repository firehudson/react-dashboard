import { takeEvery, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { LOGIN_SUCCESS } from '../actions/actionTypes';

export function* watchLoginSuccess(action) {
  yield put(push(`/dashboard/${action.data.username}`));
}

export default function* () {
  yield takeEvery(LOGIN_SUCCESS, watchLoginSuccess);
}
