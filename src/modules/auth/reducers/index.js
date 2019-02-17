import { combineReducers } from 'redux';
import userReducer from './user';

const authReducer = combineReducers({
  user: userReducer,
});

export default authReducer;
