import React from "react";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const menuItems = ["Home", "About", "Work", "Contact"];
export default function Header(props) {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Grid container spacing={1}>
            {menuItems.map((ele) => (
              <Grid item xs={1} md={1} lg={1} key={ele}>
                <Typography variant="subtitle2">{ele}</Typography>
              </Grid>
            ))}
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};
