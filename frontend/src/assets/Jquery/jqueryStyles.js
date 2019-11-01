import $ from "jquery";

export const jqueryStyles = theme => ({
  leftGrid: {
    width: "90%"
  },
  rightGrid: {
    width: "5%"
  }
});

export function applyJqueryStyles() {
  $("#wrapper").css({
    width: window.innerWidth * 0.9,
    height: window.innerHeight * 0.8,
    padding: "10px",
    border: "1px solid red"
  });
  $("#openBoxButton").css({
    "background-color": "black",
    color: "white",
    width: "100px",
    height: "30px"
  });
  $("#box").css({
    width: "100%",
    height: "100%",
    border: "1px solid black"
  });
  $("#left").css({
    border: "1px solid black",
    height: 120,
    padding: 10,
    width: "90%",
    float: "left"
  });
  $("#right").css({
    float: "right",
    width: "25%"
  });
}
