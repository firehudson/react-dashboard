import React from 'react';
import { Route, Router } from 'react-router-dom';
import { BASE_ROUTE } from '../constants/routes';
import history from './history';
import App from '../containers/App';

const Routes = () => (
  <Router history={history}>
    <App>
      <Route path={BASE_ROUTE} exact component={() => 'Base path'} />
    </App>
  </Router>
);

export default Routes;
