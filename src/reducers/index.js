import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as form } from 'redux-form';

import appReducer from './appReducer';
import authReducer from '../modules/auth/reducers';

const configureReducers = history => combineReducers({
  app: appReducer,
  auth: authReducer,
  router: connectRouter(history),
  form,
});

export default configureReducers;
