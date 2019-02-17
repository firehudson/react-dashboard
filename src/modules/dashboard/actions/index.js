import { CALL_API } from '../../../actions/apiActionTypes';
import {
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_FAILURE,
} from './actionTypes';

export const fetchPosts = (userId, searchText = '') => ({ // eslint-disable-line import/prefer-default-export
  type: CALL_API,
  types: [
    POSTS_REQUEST,
    POSTS_SUCCESS,
    POSTS_FAILURE,
  ],
  method: 'get',
  endPoint: `posts?userId=${userId}&q=${searchText}`,
});
