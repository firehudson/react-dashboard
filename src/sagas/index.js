import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';
import apiSaga from './apiSaga';

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield fork(apiSaga);
}

export const runSaga = () => {
  sagaMiddleware.run(rootSaga);
};

export default runSaga;
