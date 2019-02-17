import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LogoutButton from './LogoutButton';

const Wrapper = styled('header')`
  z-index: 1000;
  margin-bottom: 0;
  min-height: 60px;
  max-height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 0;
  padding: 0px 40px;
  background-color: ${props => props.theme.colors.navbar.background};
  color: ${props => props.theme.colors.navbar.fontColor};
`;

const Header = ({ onLogout }) => (
  <Wrapper>
    <LogoutButton onClick={onLogout}>Logout</LogoutButton>
  </Wrapper>
);

Header.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Header;
