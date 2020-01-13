import React from "react";
import "./App.css";
import NavBar from "components/navBar/navBar";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <div style={{ height: "300vh" }}>
      <CssBaseline />
      <NavBar />
    </div>
  );
}

export default App;
