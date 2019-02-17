import React from 'react';
import { Route } from 'react-router-dom';
import { DASHBOARD_HOME, DASHBOARD_EDIT } from '../../constants/routes';
import Posts from './containers/Posts';
import Edit from './containers/Edit';
import DashboardContainer from './containers/DashboardContainer';

const dashboardRoutes = (
  <DashboardContainer>
    <Route exact path={DASHBOARD_HOME} component={Posts} />
    <Route path={DASHBOARD_EDIT} component={Edit} />
  </DashboardContainer>
);

export default dashboardRoutes;
