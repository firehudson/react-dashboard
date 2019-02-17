import { handleActions } from 'redux-actions';
import { UPDATE_USER_REQUEST, UPDATE_USER_FAILURE, UPDATE_USER_SUCCESS } from '../actions/actionTypes';

export const initialState = {
  error: undefined,
  success: undefined,
  loading: false,
};

const settingsReducer = handleActions(
  {
    [UPDATE_USER_REQUEST]: state => ({
      ...state,
      loading: true,
    }),
    [UPDATE_USER_FAILURE]: (state, action) => ({
      loading: false,
      error: action.error.message,
      success: undefined,
    }),
    [UPDATE_USER_SUCCESS]: () => ({
      loading: false,
      error: undefined,
      success: 'Settings successfully updated!',
    }),
  },
  initialState,
);

export default settingsReducer;
