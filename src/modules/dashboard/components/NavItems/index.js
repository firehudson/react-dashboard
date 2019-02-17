import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavItem from './NavItem';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const NavItems = ({ items, activePath }) => (
  <Wrapper>
    {items.map(item => (
      <NavItem
        key={item.id}
        active={activePath === item.to}
        {...item}
      />
    ))}
  </Wrapper>
);

NavItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  activePath: PropTypes.string.isRequired,
};

export default NavItems;
