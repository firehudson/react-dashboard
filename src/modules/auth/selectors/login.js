import { createSelector } from 'reselect';

export const selectAuthState = state => state.auth;

export const selectUserData = createSelector(
  selectAuthState,
  auth => auth.user,
);

export const selectUserError = createSelector(
  selectAuthState,
  auth => auth.user.error,
);
