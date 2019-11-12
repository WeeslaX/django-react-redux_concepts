import React, { Component } from "react";
import { Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { footerStyles } from "../../assets/Footer/footerStyles";

export class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant="h6">Footer Page Loaded</Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(footerStyles)(Footer);
