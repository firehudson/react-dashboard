import React from 'react';
import styled from 'styled-components';

const Wrapper = styled('header')`
  z-index: 1000;
  margin-bottom: 0;
  min-height: 60px;
  max-height: 60px;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 0;
  padding: 0px 40px;
  background-color: ${props => props.theme.colors.navbar.background};
  color: ${props => props.theme.colors.navbar.fontColor};
`;

const Header = () => (
  <Wrapper />
);

export default Header;
