import React, { Component } from "react";

import { Typography, Grid, Box, Paper } from "@material-ui/core";

export class Recharts extends Component {
  render() {
    return (
      <div>
        <Typography variant="h6">
          <u>Recharts Page Loaded</u>
        </Typography>
        <Box m={2} />
        <Paper square="true" elevation="2">
          <Typography>Placeholder</Typography>
        </Paper>
      </div>
    );
  }
}

export default Recharts;
