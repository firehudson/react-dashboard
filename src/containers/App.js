import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import withStore from '../utils/withStore';
import getTheme from '../constants/themes';
import GlobalStyles from '../components/GlobalStyles';

const App = ({ children }) => (
  <ThemeProvider theme={getTheme()}>
    <Fragment>
      {children}
      <GlobalStyles />
    </Fragment>
  </ThemeProvider>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withStore(App);
