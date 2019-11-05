/* Switch between components with "current" state */

import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

// UI
import MenuButton from "./Menu/MenuButton";

// Concepts
import Lifecycle from "./Lifecycle/Lifecycle";
import Placeholder from "./Lifecycle/Unmount";
import Jquery from "./JQuery/Jquery";
import D3 from "./D3/D3";
import Async from "./Async/Async";
import Jsonfield from "./Jsonfield/Jsonfield";

import { Box, Typography, Grid } from "@material-ui/core";

export class App extends Component {
  state = {
    flag: true,
    // 0 - Lifecycle Page
    // 1 - Placeholder Page
    // 2 - JQuery
    // 3 - D3
    // 4 - Async Await
    // 5 - Jsonfield
    current: 5
  };

  // For concepts
  handlePageChange = selection => {
    this.setState({ current: selection });
  };

  handleToggleFlag = () => {
    this.setState({ flag: !this.state.flag });
  };
  handleUnmount = () => {
    this.setState({ current: 1 });
  };
  handleRemount = () => {
    this.setState({ current: 0 });
  };
  render() {
    const { flag, current } = this.state;
    return (
      <div>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="h3" style={{ padding: 10 }}>
              <u>Django-React Concepts</u>
            </Typography>
          </Grid>
          <Grid item>
            <MenuButton handlePageChange={this.handlePageChange} />
          </Grid>
        </Grid>

        <Box m={2} />
        {current === 0 && (
          <Lifecycle
            flag={flag}
            handleToggleFlag={this.handleToggleFlag}
            handleUnmount={this.handleUnmount}
          />
        )}
        {current === 1 && <Placeholder handleRemount={this.handleRemount} />}
        {current === 2 && <Jquery />}
        {current === 3 && <D3 />}
        {current === 4 && <Async />}
        {current === 5 && <Jsonfield />}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
