import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import { Typography, Grid, Box, Paper, Button } from "@material-ui/core";

import { rechartStyles } from "../../assets/Recharts/rechartStyles";
import { withStyles } from "@material-ui/styles";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

import { data0, data1, data2, ip, lineColours } from "./Data";

export class Recharts extends Component {
  state = {
    data: data0,
    selected: ip,
    checkedA: true,
    checkedB: true
  };
  componentDidMount = () => {
    const url = "http://10.1.11.3:8000/api/input-data/";

    // Get related names from a centralised source

    this.interval = setInterval(() => {
      let combinedData = [];
      axios.get(url).then(response => {
        for (let i = 0; i < response.data.length; i++) {
          combinedData.push(response.data[i].data);
        }
        this.setState({ data: combinedData });
      });
    }, 1000);
  };
  componentWillUnmount = () => {
    clearInterval(this.interval);
  };
  handleDataOneClick = () => {
    this.setState({ data: data1 });
  };
  handleDataTwoClick = () => {
    this.setState({ data: data2 });
  };
  render() {
    const { data, selected } = this.state;
    const { classes } = this.props;
    console.log(selected);
    return (
      <div>
        <Typography variant="h6">
          <u>Recharts Page Loaded</u>
        </Typography>
        <Box m={2} />
        <Grid container spacing={2} justify="flex-start">
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleDataOneClick}
            >
              D1
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleDataTwoClick}
            >
              D2
            </Button>
          </Grid>
        </Grid>
        <Box m={2} />
        <Paper square={false} elevation={2} className={classes.paper}>
          <ResponsiveContainer>
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis type="number" domain={[0, 1000]} />
              <Tooltip />
              <Legend />
              {selected.map((item, key) => {
                return (
                  <Line
                    key={key}
                    type="monotone"
                    dataKey={item}
                    stroke={lineColours[key]}
                  />
                );
              })}
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      </div>
    );
  }
}

export default withStyles(rechartStyles)(Recharts);
