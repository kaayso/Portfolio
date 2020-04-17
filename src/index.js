import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./app";

require("dotenv").config();

ReactDOM.render(<App />, document.getElementById("root"));
