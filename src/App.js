import React from "react";
import HomePage from "./Pages/HomePage";
import { Helmet } from "react-helmet";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
