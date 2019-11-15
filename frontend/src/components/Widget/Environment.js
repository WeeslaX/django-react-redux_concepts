// General Imports
import React, { Component } from "react";

// Material-UI Core Components
import { Grid, Typography, Paper, Box, Icon, Divider } from "@material-ui/core";

// Material-UI Icon Components
import {
  ImportantDevices,
  LibraryBooks,
  BubbleChart,
  Share,
  Link
} from "@material-ui/icons";

// Styling
import { withStyles } from "@material-ui/styles";
import { environmentStyles } from "../../assets/Widgets/environmentStyles";

export class Environment extends Component {
  icons = [ImportantDevices, LibraryBooks, Share, BubbleChart, Link];
  environmentTypes = ["Assets", "Protocols", "Sessions", "Nodes", "Links"];
  state = {
    data: []
  };

  componentDidMount = () => {
    // API call to fetch environment data
    let envData = [103, 20, 267, 596, 312];

    this.setState({ data: envData });
  };
  render() {
    const { classes } = this.props;
    const { icons, environmentTypes } = this;
    const { data } = this.state;
    return (
      <Grid>
        <Paper elevation={3} className={classes.environmentPaper}>
          <Typography className={classes.title}>Environment</Typography>
          <Divider variant="middle" />
          <Grid container spacing={1} className={classes.environmentGrid}>
            {environmentTypes.map((item, key) => {
              return (
                <Grid item key={key} className={classes.itemGrid}>
                  <Typography className={classes.typo}>{item}</Typography>
                  <Icon component={icons[key]} className={classes.icon} />
                  <Typography className={classes.typo}>{data[key]}</Typography>
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(environmentStyles)(Environment);
