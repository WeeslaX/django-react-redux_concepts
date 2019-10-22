import React, { Component } from "react";

import { Typography, Box, Paper } from "@material-ui/core";

// D3 Libraries
import * as d3 from "d3";
import $ from "jquery";

export class D3 extends Component {
  componentDidMount = () => {
    const width = this.props.width;
    const height = this.props.height;
    var textVisible = false;
    $("#myg").empty();

    var svg = d3
      .select(this.refs.anchor)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    svg
      .append("defs")
      .selectAll("marker")
      .data([
        { type: "link", color: "#333" },
        { type: "selected", color: "#0ff" }
      ])
      .enter()
      .append("marker")
      .attr("id", function(d) {
        return d.type;
      })
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 25)
      .attr("refY", -2.5)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("fill", function(d) {
        return d.color;
      })
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M0,-5L10,0L0,5 Z");

    svg
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "#e8f7ff");
  };
  render() {
    return (
      <div>
        <Typography variant="h5">D3 Page Loaded</Typography>
        <Box m={2} />
        <Paper style={{ border: "solid", width: "80%" }}>
          <div id="myg" ref="anchor" />
        </Paper>
      </div>
    );
  }
}

export default D3;
