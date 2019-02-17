import React from 'react';
import {
  Route,
  Router,
  Redirect,
  Switch,
} from 'react-router-dom';
import {
  BASE_ROUTE,
  LOGIN_ROUTE,
  AUTH_BASE_ROUTE,
  DASHBOARD_BASE_ROUTE,
} from '../constants/routes';
import history from './history';
import App from '../containers/App';
import authRoutes from '../modules/auth';
import dashboardRoutes from '../modules/dashboard';

const Routes = () => (
  <Router history={history}>
    <App>
      <Switch>
        <Route
          path={BASE_ROUTE}
          exact
          render={() => <Redirect to={LOGIN_ROUTE} />}
        />
        <Route path={DASHBOARD_BASE_ROUTE}>
          {dashboardRoutes}
        </Route>
        <Route path={AUTH_BASE_ROUTE}>
          {authRoutes}
        </Route>
      </Switch>
    </App>
  </Router>
);

export default Routes;
