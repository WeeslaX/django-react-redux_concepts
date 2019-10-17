import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { applyJqueryStyles } from "../../assets/Jquery/jqueryStyles";
import $ from "jquery";

export class Jquery extends Component {
  componentDidMount = () => {
    applyJqueryStyles();

    //Jquery Commands
    $("#text").append($("<div>").html("<p>JQuery Page Loaded</p>"));
    $("#box").hide();
    $("#openBoxButton").click(function() {
      $("#box").slideToggle(300);
    });
  };
  render() {
    return (
      <Grid container spacing={5}>
        <Grid item>
          <div id="text" />
          <button id="openBoxButton">Display Box</button>
        </Grid>
        <Grid item>
          <div id="box">
            <div>
              <b>
                <u>Title</u>
              </b>
            </div>
            <div>
              <p>Option 1</p>
            </div>
            <div>
              <p>Option 2</p>
            </div>
            <div>
              <p>Option 3</p>
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default Jquery;
