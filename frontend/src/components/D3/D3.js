import React, { Component } from "react";

import {
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Paper
} from "@material-ui/core";

// D3 Libraries
import * as d3 from "d3";
import $ from "jquery";

import {
  applyJqueryStyles,
  jqueryStyles
} from "../../assets/Jquery/jqueryStyles";

import { withStyles } from "@material-ui/styles";

export class D3 extends Component {
  componentDidMount = () => {
    const width = window.innerWidth * 0.3;
    const height = window.innerHeight * 0.5;

    var border = 1;
    var bordercolor = "black";

    // Styles
    applyJqueryStyles();

    $("#box").hide();
    $("#myg").empty();

    // Viewbox
    var svg = d3
      .select("#myg")
      .append("svg")
      .attr("viewBox", "0 0 1000 420")
      //.attr("preserveAspectRatio", "none")
      .attr("height", "400px")
      .attr("width", "100%");

    //Add a border
    svg
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 900)
      .attr("height", 320)
      .style("stroke", bordercolor)
      .style("fill", "yellow")
      .style("stroke-width", border);

    // Add a line
    svg
      .append("line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", 320)
      .attr("y2", 320)
      .style("stroke", "rgb(255,0,0)")
      .style("stroke-width", 2);

    //
  };

  handleButtonClick = () => {
    $("#left").toggleClass("wide reduced");
    if ($("#left").attr("class") === "wide") {
      $("#left").animate({ width: "+=20%" }, 0);
    } else {
      $("#left").animate({ width: "-=20%" }, 0);
    }
    $("#box").animate({ width: "toggle" }, 0);
    //d3.select("#myg").attr("viewBox", "0 0 900 420");
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={3} justify="flex-start">
          <Grid item>
            <Typography variant="h5">D3 Page Loaded</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="secondary"
              onClick={this.handleButtonClick}
            >
              Open Box
            </Button>
          </Grid>
        </Grid>
        <Box m={2} />
        <div id="wrapper">
          <div id="left" class="wide">
            <div id="myg" ref="anchor" />
          </div>
          <div id="right">
            <div id="box">
              <Card>
                <CardHeader title="Purdue Model Info" subheader="Placeholder" />
                <CardContent>
                  <Typography>Option 1</Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(jqueryStyles)(D3);
