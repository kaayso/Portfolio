import React, { useState, useEffect } from 'react';
import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from 'components/navBar/navBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Loader from 'components/loader/loader';
import Home from 'containers/home/home';
import PDescription from 'containers/pDescription/pDescription';
import Footer from 'containers/footer/footer';
import Contact from 'containers/contact/contact';

function App() {
  const [visible, setLoaderVisibility] = useState(true);
  const [cVisible, setCVisibility] = React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderVisibility(false);
    }, 800);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const toggleDrawer = (open, event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setCVisibility(open);
  };

  return (
    <div id="app-root">
      <Router>
        <CssBaseline />
        <Loader visible={visible} />
        <Contact
          visible={cVisible}
          toggleDrawer={toggleDrawer}
          position="bottom"
        />
        <NavBar toggleContactDrawer={toggleDrawer} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:slug" component={PDescription} />
        </Switch>
        <Footer toggleContactDrawer={toggleDrawer} />
      </Router>
    </div>
  );
}

export default App;
