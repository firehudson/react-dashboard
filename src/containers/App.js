import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { logout } from '../actions';
import withStore from '../utils/withStore';
import getTheme from '../constants/themes';
import GlobalStyles from '../components/GlobalStyles';
import Header from '../components/Header';
import RootWrapper from '../components/RootWrapper';
import { selectUserData } from '../modules/auth/selectors/user';

const App = ({ children, onLogout, user }) => (
  <ThemeProvider theme={getTheme()}>
    <Fragment>
      <Header onLogout={onLogout} canLogout={!!(user && user.id !== undefined)} />
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
  user: PropTypes.shape({
    id: PropTypes.number,
  }),
};

const mapStateToProps = createStructuredSelector({
  user: selectUserData,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    onLogout: logout,
  },
  dispatch,
);

const reduxConnected = connect(mapStateToProps, mapDispatchToProps)(App);

export default withStore(withRouter(reduxConnected));
