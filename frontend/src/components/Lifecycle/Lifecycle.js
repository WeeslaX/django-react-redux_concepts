import React, { Component } from "react";
import { Typography, Box, Button, Grid } from "@material-ui/core";

export class Lifecycle extends Component {
  state = {
    typoOne: true,
    typoTwo: false
  };
  componentWillMount = () => {
    //Executed before components added to DOM
    //Called in the server
    console.log("ComponentWillMount");
  };
  componentDidMount = () => {
    //After component rendered, add any set up that requires the DOM (Eg: Requests)
    console.log("ComponentDidMount");
  };

  componentWillReceiveProps = () => {
    // After receiving props from parent
    console.log("ComponentWillReceiveProps");
  };

  //   componentWillUpdate = () => {
  //     // Invokes immediately before rendering new props/state received [Should Avoid]
  //     console.log("ComponentWillUpdate");
  //   };

  componentDidUpdate = () => {
    // Used in response to a prop/state update
    console.log("componentDidUpdate");
  };

  componentWillUnmount = () => {
    // When component unmounts, for cleaning up purposes
    console.log("componentWillUnmount");
  };

  shouldComponentUpdate = () => {
    //Default behavior: render every update
    // If returns false: componentWillUpdate, render(), componentDidUpdate will not invoke
    console.log("shouldComponentUpdate");
    // Always update
    return true;
  };

  render() {
    console.log("Render");
    const { flag, handleToggleFlag, handleUnmount } = this.props;
    let flagContent = `Flag Property: ${flag}`;
    return (
      <div>
        <Typography variant="h6">
          <u>Lifecycle Page Loaded</u>
        </Typography>
        <Box m={2} />
        <Typography>{flagContent}</Typography>
        <Box m={2} />
        <Grid container justify="flex-start" spacing={1}>
          <Grid item>
            <Button
              variant="contained"
              onClick={handleToggleFlag}
              color="primary"
            >
              Toggle
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={handleUnmount}
              color="secondary"
            >
              Unmount
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Lifecycle;
