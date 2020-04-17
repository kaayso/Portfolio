import React, { useState, useEffect } from "react";
import "./app.css";
import NavBar from "components/navBar/navBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import AboutMe from "containers/aboutMe/aboutMe";
import Loader from "components/loader/loader";
import SMBoard from "components/SMBoard/SMBoard";
import Cv from "containers/cv/cv";

function App() {
  const [visible, setLoaderVisibility] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderVisibility(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div id="app-root">
      <CssBaseline />
      <Loader visible={visible} />
      {!visible && (
        <div>
          <NavBar />
          <SMBoard />
          <AboutMe />
          <Cv />
          <div
            id="projets"
            style={{ height: "100vh", backgroundColor: "green" }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default App;
