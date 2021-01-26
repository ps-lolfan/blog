import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
export default class HomeGround extends Component {
  render() {
    return (
      <Grid container spacing={2} justify="space-around">
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography
                // className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
