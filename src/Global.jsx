import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
  -webkit-font-smoothing: antialiased;
  font-family: 'Roboto', sans-serif;

  
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

export default GlobalStyle;
