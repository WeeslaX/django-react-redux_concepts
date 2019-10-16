import React, { Component } from "react";
import { Typography, Box, Button } from "@material-ui/core";

export class Unmount extends Component {
  render() {
    const { handleRemount } = this.props;
    return (
      <div>
        <Typography>Component Unmounted</Typography>
        <Box m={2} />
        <Button variant="contained" color="secondary" onClick={handleRemount}>
          Remount
        </Button>
      </div>
    );
  }
}

export default Unmount;
