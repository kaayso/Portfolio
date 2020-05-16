import React, { useState, useEffect } from "react";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "components/navBar/navBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Loader from "components/loader/loader";
import Home from "containers/home/home";
import PDescription from "containers/pDescription/pDescription";

function App() {
  const [visible, setLoaderVisibility] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderVisibility(false);
    }, 800);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div id="app-root">
      <Router>
        <CssBaseline />
        <Loader visible={visible} />

        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:slug" component={PDescription} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
