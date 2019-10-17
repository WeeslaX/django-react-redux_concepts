/* Switch between components with "current" state */

import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Lifecycle from "./Lifecycle/Lifecycle";
import Placeholder from "./Lifecycle/Unmount";
import Jquery from "./JQuery/Jquery";

import { Box } from "@material-ui/core";

export class App extends Component {
  state = {
    flag: true,
    current: 2
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
        <h1>
          <u>Django-React Concepts</u>
        </h1>
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
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
