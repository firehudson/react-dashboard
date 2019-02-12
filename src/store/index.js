import { createStore, applyMiddleware } from 'redux';
import configureReducers from '../reducers';
import enhancer from './enhancers';
import middlewares from './middlewares';
import runSaga from '../sagas';

let store = null;

const configureStore = (history) => {
  if (!store) {
    store = createStore(
      configureReducers(history),
      enhancer(applyMiddleware(...middlewares)),
    );


    // trigger sagas to run
    runSaga();
  }

  return store;
};

export default configureStore;
