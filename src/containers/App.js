import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import withStore from '../utils/withStore';
import getTheme from '../constants/themes';
import GlobalStyles from '../components/GlobalStyles';
import Header from '../components/Header';
import RootWrapper from '../components/RootWrapper';

const App = ({ children }) => (
  <ThemeProvider theme={getTheme()}>
    <Fragment>
      <Header />
      <RootWrapper>
        {children}
      </RootWrapper>
      <GlobalStyles />
    </Fragment>
  </ThemeProvider>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withStore(App);
