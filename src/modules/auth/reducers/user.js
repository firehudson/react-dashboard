import { handleActions } from 'redux-actions';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/actionTypes';
import { LOGOUT } from '../../../actions/appActionTypes';
import { UPDATE_USER_SUCCESS } from '../../dashboard/actions/actionTypes';

export const initialState = {};

const userReducer = handleActions(
  {
    [LOGIN_REQUEST]: state => ({
      ...state,
      loading: true,
    }),
    [LOGIN_SUCCESS]: (state, action) => ({
      ...action.data,
      loading: false,
    }),
    [UPDATE_USER_SUCCESS]: (state, action) => ({
      ...action.data,
      loading: false,
    }),
    [LOGIN_FAILURE]: (state, action) => ({
      loading: false,
      error: action.error.message,
    }),
    [LOGOUT]: () => initialState,
  },
  initialState,
);

export default userReducer;
