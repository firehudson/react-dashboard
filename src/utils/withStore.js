import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from '../routes/history';
import configureStore from '../store';

const store = configureStore(history);

const withConnectedStore = Component => props => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Component {...props} />
    </ConnectedRouter>
  </Provider>
);

export default withConnectedStore;
