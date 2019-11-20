import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import {
  Typography,
  Grid,
  Box,
  Paper,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormControl,
  IconButton
} from "@material-ui/core";

import { PauseCircleFilledOutlined } from "@material-ui/icons";

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
  ResponsiveContainer,
  Label
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
    clearInterval(this.interval);
    this.setState({ data: data1 });
  };
  handleDataTwoClick = () => {
    clearInterval(this.interval);
    this.setState({ data: data0 });
  };
  handleStartQuery = () => {};

  handleCheckedAClick = event => {
    this.setState({ checkedA: !this.state.checkedA }, () => {
      if (!this.state.checkedA) {
        this.setState({
          selected: this.state.selected.filter(item => {
            return item !== ip[0];
          })
        });
      } else {
        this.setState({ selected: this.state.selected.concat(ip[[0]]) });
      }
    });
  };
  handleCheckedBClick = event => {
    this.setState({ checkedB: !this.state.checkedB }, () => {
      if (!this.state.checkedB) {
        this.setState({
          selected: this.state.selected.filter(item => {
            return item !== ip[1];
          })
        });
      } else {
        this.setState({ selected: this.state.selected.concat(ip[[1]]) });
      }
    });
  };
  handleColor = item => {
    for (let i = 0; i < ip.length; i++) {
      if (item === ip[i]) {
        return lineColours[i];
      }
    }
  };

  render() {
    const { data, selected } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Typography variant="h6">
          <u>Recharts Page Loaded</u>
        </Typography>
        <Box m={2} />
        <Grid container spacing={1} className={classes.gridContainer}>
          <Grid item className={classes.gridGraph}>
            <Paper square={false} elevation={2} className={classes.paperGraph}>
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
                  <XAxis dataKey="name" tick={false}>
                    <Label value="Time" offset={10} position="insideBottom" />
                  </XAxis>
                  <YAxis type="number" domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  {selected.map((item, key) => {
                    let color = this.handleColor(item);
                    return (
                      <Line
                        isAnimationActive={false}
                        key={key}
                        type="monotone"
                        dataKey={item}
                        stroke={color}
                      />
                    );
                  })}
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
          <Grid item>
            <Paper
              square={false}
              elevation={2}
              className={classes.paperCheckbox}
            >
              <FormGroup className={classes.formGroup}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedA}
                      value={ip[0]}
                      color="primary"
                      onChange={this.handleCheckedAClick}
                    />
                  }
                  label={ip[0]}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedB}
                      value={ip[1]}
                      color="primary"
                      onChange={this.handleCheckedBClick}
                    />
                  }
                  label={ip[1]}
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(rechartStyles)(Recharts);
