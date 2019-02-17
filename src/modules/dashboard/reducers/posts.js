import { handleActions } from 'redux-actions';
import { POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAILURE } from '../actions/actionTypes';

export const initialState = {
  posts: [],
  loading: false,
};

const postsReducer = handleActions(
  {
    [POSTS_REQUEST]: state => ({
      ...state,
      loading: true,
    }),
    [POSTS_SUCCESS]: (state, action) => ({
      posts: action.data,
      loading: false,
    }),
    [POSTS_FAILURE]: (state, action) => ({
      loading: false,
      error: action.error.message,
    }),
  },
  initialState,
);

export default postsReducer;
