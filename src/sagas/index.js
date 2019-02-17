import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';
import apiSaga from './apiSaga';
import loginSaga from '../modules/auth/sagas';

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield fork(apiSaga);
  yield fork(loginSaga);
}

export const runSaga = () => {
  sagaMiddleware.run(rootSaga);
};

export default runSaga;
