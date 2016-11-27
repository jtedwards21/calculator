import React from "react";
import ReactDOM from "react-dom";
import Calculator from "components/calculator";

var screen = "";

ReactDOM.render(<Calculator screen={screen}/>, document.getElementById("content"));
