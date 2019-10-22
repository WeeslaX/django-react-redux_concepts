import React, { Component } from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography
} from "@material-ui/core";
import {
  applyJqueryStyles,
  jqueryStyles
} from "../../assets/Jquery/jqueryStyles";
import $ from "jquery";

export class Jquery extends Component {
  componentDidMount = () => {
    //Jquery Commands
    $("#text").append($("<div>").html("<p>Purdue Model</p>"));
    $("#box").hide();

    $("#openBoxButton").on("click", function() {
      $("#left").toggleClass("wide reduced");
      if ($("#left").attr("class") === "wide") {
        $("#left").animate({ width: "+=20%" }, 0);
      } else {
        $("#left").animate({ width: "-=20%" }, 0);
      }
      $("#box").animate({ width: "toggle" }, 0);
    });
    // Styles
    applyJqueryStyles();
  };
  render() {
    return (
      <div id="wrapper">
        {/* Left Side */}
        <div id="left" class="wide">
          <div id="text" />
          <button id="openBoxButton">Display Box</button>
        </div>

        {/* Right Side */}
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
    );
  }
}

export default Jquery;
