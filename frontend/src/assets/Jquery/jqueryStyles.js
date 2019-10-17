import $ from "jquery";

export function applyJqueryStyles() {
  $("#openBoxButton").css({
    "background-color": "black",
    color: "white",
    width: "100px",
    height: "30px"
  });
  $("#box").css({
    width: "300px",
    height: "120px",
    padding: "10px",
    border: "1px solid red"
  });
}
