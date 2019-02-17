import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Sidebar from '../components/Sidebar';
import { selectUserData } from '../../auth/selectors/user';

const Wrapper = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
`;

const DashboardContainer = ({ user, children, location }) => (
  <Wrapper>
    <Sidebar user={user} activePath={location.pathname} />
    {children}
  </Wrapper>
);

DashboardContainer.propTypes = {
  user: PropTypes.shape({
    status: PropTypes.string,
    avatar: PropTypes.string,
  }),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

const mapStateToProps = createStructuredSelector({
  user: selectUserData,
});

const reduxConnected = connect(mapStateToProps)(DashboardContainer);

export default withRouter(reduxConnected);
