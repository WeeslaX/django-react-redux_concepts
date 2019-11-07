/* Note: 

- If an attribute is not included in PUT request within Jsonfield, it will be removed (jsonfield replaced) 

*/

import React, { Component } from "react";
import axios from "axios";
import { Button, Grid, Typography, Box } from "@material-ui/core";

import "core-js/stable";
import "regenerator-runtime/runtime";

export class Jsonfield extends Component {
  state = {
    data1: "",
    data2: "",
    response: ""
  };
  handlePostJsonfield = async () => {
    await axios
      .post("http://10.1.11.3:8000/api/placeholder/", {
        name: "test",
        data: { Attr1: "test", Attr2: "test" }
      })
      .then(response => {
        this.setState({ data1: "" });
        this.setState({ data2: "" });
        this.setState({ response: "Post" });
      });
  };

  handlePutJsonfield = async () => {
    await axios
      .put("http://10.1.11.3:8000/api/placeholder/1/", {
        name: "test",
        data: { Attr1: "changed" }
      })
      .then(response => {
        this.setState({ data1: "" });
        this.setState({ data2: "" });
        this.setState({ response: "Put" });
      });
  };

  handleGetJsonfield = async () => {
    await axios.get("http://10.1.11.3:8000/api/placeholder/").then(response => {
      this.setState({ data1: response.data[0].data.Attr1 });
      this.setState({ data2: response.data[0].data.Attr2 });
      this.setState({ response: "Get" });
    });
  };
  render() {
    return (
      <div>
        <Typography variant="h6">
          <u>Jsonfield Page Loaded</u>
        </Typography>
        <Box m={3} />
        <Grid container spacing={2}>
          <Grid item>
            <Button
              onClick={this.handleGetJsonfield}
              variant="contained"
              color="secondary"
            >
              Get Jsonfield Data
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={this.handlePostJsonfield}
              variant="contained"
              color="primary"
            >
              Post Jsonfield Data
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={this.handlePutJsonfield} variant="contained">
              Put Jsonfield Data
            </Button>
          </Grid>
        </Grid>
        <Box m={3} />
        <Typography variant="h6">Status: {this.state.response}</Typography>
        <Box m={1} />
        <Typography variant="h6">Attr1 Data: {this.state.data1} </Typography>
        <Box m={1} />
        <Typography variant="h6">Attr2 Data: {this.state.data2} </Typography>
      </div>
    );
  }
}

export default Jsonfield;
