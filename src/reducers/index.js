import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as form } from 'redux-form';

import appReducer from './appReducer';

const configureReducers = history => combineReducers({
  app: appReducer,
  router: connectRouter(history),
  form,
});

export default configureReducers;
