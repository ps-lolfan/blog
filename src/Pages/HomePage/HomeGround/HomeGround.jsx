import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Profile from "../Profile";

export default class HomeGround extends Component {
  render() {
    return (
      <Grid container spacing={3} justify="space-around">
        <Grid item xs={4}>
          <Profile />
        </Grid>
        <Grid item xs={4}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}
