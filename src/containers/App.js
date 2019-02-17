import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { logout } from '../actions';
import withStore from '../utils/withStore';
import getTheme from '../constants/themes';
import GlobalStyles from '../components/GlobalStyles';
import Header from '../components/Header';
import RootWrapper from '../components/RootWrapper';

const App = ({ children, onLogout }) => (
  <ThemeProvider theme={getTheme()}>
    <Fragment>
      <Header onLogout={onLogout} />
      <RootWrapper>
        {children}
      </RootWrapper>
      <GlobalStyles />
    </Fragment>
  </ThemeProvider>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
  onLogout: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    onLogout: logout,
  },
  dispatch,
);

const reduxConnected = connect(null, mapDispatchToProps)(App);

export default withStore(reduxConnected);
