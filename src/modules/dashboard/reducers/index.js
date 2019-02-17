import { combineReducers } from 'redux';
import postsReducer from './posts';

const dashboardReducer = combineReducers({
  posts: postsReducer,
});

export default dashboardReducer;
