import { combineReducers } from 'redux';
import postsReducer from './posts';
import settingsReducer from './settings';

const dashboardReducer = combineReducers({
  posts: postsReducer,
  settings: settingsReducer,
});

export default dashboardReducer;
