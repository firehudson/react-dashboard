import React from 'react';
import {
  Route,
  Router,
  Redirect,
  Switch,
} from 'react-router-dom';
import { BASE_ROUTE, LOGIN_ROUTE } from '../constants/routes';
import history from './history';
import App from '../containers/App';
import authRoutes from '../modules/auth';

const Routes = () => (
  <Router history={history}>
    <App>
      <Switch>
        <Route
          path={BASE_ROUTE}
          exact
          render={() => <Redirect to={LOGIN_ROUTE} />}
        />
        {authRoutes}
      </Switch>
    </App>
  </Router>
);

export default Routes;
