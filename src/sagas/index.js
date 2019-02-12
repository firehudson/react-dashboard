import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield console.log('=====Root saga started=====');
}

export const runSaga = () => {
  sagaMiddleware.run(rootSaga);
};

export default runSaga;
