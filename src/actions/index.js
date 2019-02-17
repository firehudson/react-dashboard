import { createAction } from 'redux-actions';
import { LOGOUT } from './appActionTypes';

export const logout = createAction(LOGOUT); // eslint-disable-line import/prefer-default-export
