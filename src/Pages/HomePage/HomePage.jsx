import React, { Component } from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import MainLanding from "./MainLanding";
import Grid from "@material-ui/core/Grid";

class HomePage extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#000",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <NavBar />
            <MainLanding />
            <Footer
              title={"footer title tbd"}
              description={
                "some random description this will be changed in future"
              }
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default HomePage;
