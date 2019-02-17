import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Login from './containers/login';
import { DASHBOARD_HOME } from '../../constants/routes';

const dashboardRoutes = (
  <Fragment>
    <Route exact path={DASHBOARD_HOME} component={Login} />
  </Fragment>
);

export default dashboardRoutes;
