/* To add Async Await:

  1. npm install core-js
  2. Modify babel.rc to include core-js
  3. Add imports:
    3.1 import "core-js/stable";
    3.2 import "regenerator-runtime/runtime";

*/

import React, { Component } from "react";
import { Typography, Button, Grid, Box } from "@material-ui/core";

import axios from "axios";
import "core-js/stable";
import "regenerator-runtime/runtime";

export class Async extends Component {
  state = {
    id: "pending",
    name: "pending",
    creation: "pending"
  };
  handleFetchClick = async () => {
    let response = await axios.get("http://10.1.11.3:8000/api/placeholder");
    this.setState({ id: response.data[0].id });
    this.setState({ name: response.data[0].name });
    this.setState({ creation: response.data[0].createdAt });
  };

  handleUpdateClick = async () => {
    await axios.put("http://10.1.11.3:8000/api/placeholder/1/", {
      name: "Dickson"
    });
    let response = await axios.get("http://10.1.11.3:8000/api/placeholder");
    this.setState({ name: response.data[0].name });
  };

  render() {
    const { id, name, creation } = this.state;
    return (
      <div>
        <Typography variant="h6">Async Await Loaded</Typography>
        <Box m={3} />
        <Grid container jutify="flex-start" spacing={4}>
          <Grid item>
            <Button
              variant="contained"
              style={{ backgroundColor: "#00cf0a", color: "#000000" }}
              onClick={this.handleFetchClick}
            >
              Fetch Data
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              style={{ backgroundColor: "#e80000", color: "#000000" }}
              onClick={this.handleUpdateClick}
            >
              Update Data
            </Button>
          </Grid>
        </Grid>
        <Box m={3} />
        <Typography variant="body1">ID: {id}</Typography>
        <Typography variant="body1">Name: {name}</Typography>
        <Typography variant="body1">Creation: {creation}</Typography>
      </div>
    );
  }
}

export default Async;
