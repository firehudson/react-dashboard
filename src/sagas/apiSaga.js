import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { CALL_API } from '../actions/apiActionTypes';
import config from '../constants/config';

export function* apiSaga(action) {
  const [request, success, failure] = action.types;
  const requestUrl = `${config.get('server.baseUrl')}/${action.endPoint}`;
  const requestBody = action.body || {};

  yield put({ type: request });

  try {
    const response = yield axios[action.method](requestUrl, requestBody);
    if (response.status < 200 || response.status > 400) {
      throw new Error('Failed to fetch response from server');
    }

    if (response.data.error) {
      throw new Error(response.data.error);
    }

    yield put({ type: success, data: response.data.data });
  } catch (error) {
    yield put({ type: failure, error });
  }
}

export default function* () {
  yield takeEvery(CALL_API, apiSaga);
}
