import { createSelector } from 'reselect';

export const selectDashboardState = state => state.dashboard;

export const selectPostsData = createSelector(
  selectDashboardState,
  dashboard => dashboard.posts.posts,
);

export const selectPostsError = createSelector(
  selectDashboardState,
  dashboard => dashboard.posts.error,
);
