import styled from 'styled-components';

const NavItemLabel = styled('div')`
  color: ${props => props.theme.colors.app.primary};
  margin: 10px auto;
  text-decoration: ${props => props.active ? 'underline' : 'none'};
`;

export default NavItemLabel;
