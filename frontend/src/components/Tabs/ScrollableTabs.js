import React, { Component } from "react";

import { AppBar, Tab, Tabs, Typography, Box } from "@material-ui/core";
import { TabPanel } from "./TabPanel";

import Recharts from "../Recharts/Recharts";
import Environment from "../Widget/Environment";

import { withStyles } from "@material-ui/styles";
import { tabStyles } from "../../assets/Tabs/tabStyles";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export class ScrollableTabs extends Component {
  state = {
    value: 0
  };

  handleTabChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div>
        <Typography variant="h6">
          <u>Tabs Page Loaded</u>
        </Typography>
        <Box m={2} />
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
              <Tab label="Item Four" {...a11yProps(3)} />
              <Tab label="Item Five" {...a11yProps(4)} />
              <Tab label="Item Six" {...a11yProps(5)} />
              <Tab label="Item Seven" {...a11yProps(6)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <Recharts />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Environment />
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Six
          </TabPanel>
          <TabPanel value={value} index={6}>
            Item Seven
          </TabPanel>
        </div>
      </div>
    );
  }
}

export default withStyles(tabStyles)(ScrollableTabs);
