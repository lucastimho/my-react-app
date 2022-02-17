import React from "react";
import ReactDOM from "react-dom";

const myfirstelement = <h1>Hello React!</h1>;
function Hello() {
  return <h2>Hello World!</h2>;
}

ReactDOM.render(myfirstelement, document.getElementById("mydiv"));
ReactDOM.render(<Hello />, document.getElementById("root"));
