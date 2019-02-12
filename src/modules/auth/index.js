import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './containers/login';
import { LOGIN_ROUTE } from '../../constants/routes';

const authRoutes = (
  <Switch>
    <Route path={LOGIN_ROUTE} component={Login} />
  </Switch>
);

export default authRoutes;
