import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavItemLabel from './NavItemLabel';

const StyledLink = styled(Link)`
  text-decoration: ${props => props.isActive ? 'underline' : 'none'};
`;

const NavItem = ({ to, label, active }) => (
  <StyledLink to={to}>
    <NavItemLabel active={active}>
      {label}
    </NavItemLabel>
  </StyledLink>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default NavItem;
