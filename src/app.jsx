import React, { useState, useEffect } from "react";
import "./app.css";
import NavBar from "components/navBar/navBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Loader from "components/loader/loader";
import SMBoard from "components/SMBoard/SMBoard";
import Introduction from "containers/introduction/introduction";

function App() {
  const [visible, setLoaderVisibility] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderVisibility(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="app-root">
      <CssBaseline />
      {visible ? (
        <Loader visible={visible} />
      ) : (
        <>
          <NavBar />
          <SMBoard />
          <Introduction />
        </>
      )}
    </div>
  );
}

export default App;
