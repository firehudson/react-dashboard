import { takeEvery, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { LOGOUT } from '../../../actions/appActionTypes';
import { LOGIN_ROUTE } from '../../../constants/routes';

export function* watchLogout() {
  yield put(push(LOGIN_ROUTE));
}

export default function* () {
  yield takeEvery(LOGOUT, watchLogout);
}
