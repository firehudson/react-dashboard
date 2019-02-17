import { createSelector } from 'reselect';

export const selectDashboardState = state => state.dashboard;

export const selectUpdateErrorMessage = createSelector(
  selectDashboardState,
  dashboard => dashboard.settings.error,
);

export const selectUpdateSuccessMessage = createSelector(
  selectDashboardState,
  dashboard => dashboard.settings.success,
);
