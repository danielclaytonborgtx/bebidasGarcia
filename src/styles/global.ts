import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #FFF;
    -webkit-font-smoothing: antialiased;
    font-family: 'Inter', sans-serif;
  }

  h1, h2, h3, h4, h5, h6  {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 606;
  }

  button {
    cursor: pointer;
    font-family: 'Inter', sans-serif;
  }
`;
