import React from 'react';
import PropTypes from 'prop-types';
import withStore from '../utils/withStore';

const App = ({ children }) => (
  <div className="App">
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withStore(App);
