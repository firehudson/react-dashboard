import styled from 'styled-components';

const LogoutButton = styled('button')`
  border-style: none;
  padding: 5px 15px;
  border-radius: 2px;
  color: ${props => props.theme.colors.app.primary};
  background-color: ${props => props.theme.colors.app.background};
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

export default LogoutButton;
