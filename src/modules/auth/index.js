import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Login from './containers/login';
import { LOGIN_ROUTE } from '../../constants/routes';

const authRoutes = (
  <Fragment>
    <Route path={LOGIN_ROUTE} component={Login} />
  </Fragment>
);

export default authRoutes;
