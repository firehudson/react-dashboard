import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Sidebar from '../components/Sidebar';
import { selectUserData } from '../../auth/selectors/user';
import { logout } from '../../../actions';

const Wrapper = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
`;

class DashboardContainer extends Component {
  constructor(props) {
    super(props);

    if (props.user.id === undefined) { // avoiding the case where id is 0.
      // if can't find user's information on the dashboard, enforce logout process.
      props.logout();
    }
  }

  render() {
    const { user, children, location } = this.props;

    return (
      <Wrapper>
        <Sidebar user={user} activePath={location.pathname} />
        {children}
      </Wrapper>
    );
  }
}

DashboardContainer.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
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

const mapDispatchToProps = dispatch => bindActionCreators({
  logout,
}, dispatch);

const reduxConnected = connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);

export default withRouter(reduxConnected);
