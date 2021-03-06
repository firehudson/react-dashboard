import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;

    font-family: sans-serif;
    letter-spacing: 1px;  
  }

  #root {
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.colors.app.background};
  }
`;

export default GlobalStyles;
