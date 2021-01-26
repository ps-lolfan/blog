import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import ProfilePic from "../../../static/profilepic.jpg";
const styles = (theme) => ({
  text: {
    color: "red",
  },
});

class MainLanding extends Component {
  render() {
    // const { classes } = this.props;
    return (
      <Grid container justify="space-between">
        <Grid item xs={8}>
          <Typography
            style={{
              color: "red",
            }}
          >
            Hi, I`m Praveen
          </Typography>
        </Grid>
        <Grid item xs={3} alignItems="flex-end">
          <img
            style={{
              height: "500px",
            }}
            src={ProfilePic}
            alt={"tile.title"}
          />
        </Grid>
      </Grid>
    );
  }
}

export default MainLanding;
