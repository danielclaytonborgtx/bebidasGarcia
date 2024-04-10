import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PrismicProvider } from "@prismicio/react";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { Router } from "./routes";
import { client } from "./services/prismic";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PrismicProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PrismicProvider>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
