import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import HomePage from "./Pages/HomePage";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Helmet>
          <meta charSet="utf-8" />
          <title>ps-lolfan zone</title>
          <link
            rel="icon"
            type="image/png"
            href="https://ibb.co/Ctw1yPY"
            sizes="16x16"
          />
        </Helmet>
        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
