import { CALL_API } from '../../../actions/apiActionTypes';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './actionTypes';

export const login = (email, password) => ({ // eslint-disable-line import/prefer-default-export
  type: CALL_API,
  types: [
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
  ],
  method: 'post',
  endPoint: 'login',
  body: {
    email,
    password,
  },
});
