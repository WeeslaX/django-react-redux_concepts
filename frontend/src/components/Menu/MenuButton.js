import React, { Component } from "react";
import { Button, MenuItem, Menu } from "@material-ui/core";

export class MenuButton extends Component {
  state = {
    anchor: null,
    open: false
  };
  handleClickMenu = event => {
    this.setState({ anchor: event.currentTarget });
    this.setState({ open: true });
  };
  handleNormalClose = () => {
    this.setState({ anchor: null });
    this.setState({ open: false });
  };
  handleMenuSelectionClose = selection => {
    this.setState({ anchor: null });
    this.setState({ open: false });
    this.props.handlePageChange(selection);
  };

  render() {
    const { anchor, open } = this.state;
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleClickMenu}
        >
          Open Menu
        </Button>
        <Menu
          anchorEl={anchor}
          keepMounted
          open={open}
          onClose={this.handleNormalClose}
        >
          <MenuItem
            onClick={() => {
              this.handleMenuSelectionClose(0);
            }}
          >
            Lifecycle
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.handleMenuSelectionClose(2);
            }}
          >
            JQuery
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.handleMenuSelectionClose(3);
            }}
          >
            D3
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.handleMenuSelectionClose(4);
            }}
          >
            Async
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.handleMenuSelectionClose(5);
            }}
          >
            Jsonfield
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.handleMenuSelectionClose(6);
            }}
          >
            Recharts
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default MenuButton;
