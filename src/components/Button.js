import styled from 'styled-components';

const Button = styled('button')`
  padding: 10px 20px;
  background-color: ${props => props.theme.colors.app.primary};
  color: ${props => props.theme.colors.white};
  border-style: none;
  margin: 10px 0px;
  font-size: 14px;
  cursor: pointer;
  width: 100%;

  :focus {
    outline: none;
  }
`;

export default Button;
