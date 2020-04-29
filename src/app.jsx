import React, { useState, useEffect } from "react";
import "./app.css";
import NavBar from "components/navBar/navBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Loader from "components/loader/loader";
import Introduction from "containers/introduction/introduction";
import Development from "containers/development/development";
import Cv from "containers/cv/cv";

function App() {
  const [visible, setLoaderVisibility] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderVisibility(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div id="app-root">
      <CssBaseline />
      <Loader visible={visible} />
      <NavBar />
      <Introduction />
      <Development />
      <Cv />
    </div>
  );
}

export default App;
