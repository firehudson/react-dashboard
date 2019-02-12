import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import appReducer from './appReducer';

const configureReducers = history => combineReducers({
  app: appReducer,
  router: connectRouter(history),
});

export default configureReducers;
