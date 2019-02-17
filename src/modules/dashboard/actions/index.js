import { CALL_API } from '../../../actions/apiActionTypes';
import {
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_FAILURE,
  UDPATE_USER_REQUEST,
  UDPATE_USER_SUCCESS,
  UDPATE_USER_FAILURE,
} from './actionTypes';

export const fetchPosts = (userId, searchText = '') => ({
  type: CALL_API,
  types: [
    POSTS_REQUEST,
    POSTS_SUCCESS,
    POSTS_FAILURE,
  ],
  method: 'get',
  endPoint: `posts?userId=${userId}&q=${searchText}`,
});

export const updateUser = (userId, updatedValues) => ({
  type: CALL_API,
  types: [
    UDPATE_USER_REQUEST,
    UDPATE_USER_SUCCESS,
    UDPATE_USER_FAILURE,
  ],
  method: 'patch',
  endPoint: `users/${userId}`,
  body: updatedValues,
});
