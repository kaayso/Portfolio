import React, { useState, Fragment } from "react";
import "./navBar.css";
import Logo from "assets/images/logo_navBar.png";
import BFLogo from "assets/images/bf_logo.png";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Fingerprint from "@material-ui/icons/Fingerprint";
import AccountCircle from "@material-ui/icons/Work";
import CodeRounded from "@material-ui/icons/CodeRounded";
import ContactMail from "@material-ui/icons/ContactSupportRounded";
import Divider from "@material-ui/core/Divider";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

// Used only for media queries
const useStyles = makeStyles(theme => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    },
    flexGrow: 1,
    paddingLeft: "6em",
    paddingRight: "6em"
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    },
    flexGrow: 1
  }
}));

// Get icon according to index

const getIcon = index => {
  switch (index) {
    case 0:
      return <Fingerprint className="navBar__drawer-icon" />;
    case 1:
      return <AccountCircle className="navBar__drawer-icon" />;
    case 2:
      return <CodeRounded className="navBar__drawer-icon" />;
    case 3:
      return <ContactMail className="navBar__drawer-icon" />;
    default:
      return;
  }
};

export default function NavBar(props) {
  const classes = useStyles();
  const [openLeft, setState] = useState(false);
  const { window } = props;

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  // Open/close the drawer for mobile
  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <Fragment>
      <Slide
        appear={false}
        direction="down"
        in={!trigger}
        timeout={{
          enter: 1000,
          exit: 0
        }}
      >
        <div className={classes.sectionDesktop}>
          <AppBar position="fixed" className="appBar">
            <Toolbar className="navBar">
              <Button href="/">
                <img
                  className="navBar__logo"
                  src={Logo}
                  alt="Faycel Benyoussa"
                />
              </Button>
              <div className="navBar__btn-container">
                {["présentation", "curriculum vitae", "projets", "contact"].map(
                  text => (
                    <Button
                      key={text}
                      href={`#${text
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f-\s]/g, "")}`}
                      size="small"
                      className="navBar__btn"
                    >
                      {text}
                    </Button>
                  )
                )}
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </Slide>
      <div className={classes.sectionMobile}>
        <AppBar position="relative" className="appBar">
          <Toolbar className="navBar">
            <IconButton
              onClick={toggleDrawer(true)}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon className="navBar_menuIcon" />
            </IconButton>
            <Button href="/">
              <img
                className="navBar__logo--mobile"
                src={BFLogo}
                alt="Faycel Benyoussa"
              />
            </Button>
          </Toolbar>
          <Drawer open={openLeft} onClose={toggleDrawer(false)}>
            <div
              className="navBar__drawer-content"
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <img
                className="navBar__logo--mobile--drawer"
                src={BFLogo}
                alt="Faycel Benyoussa"
              />
              <Divider />
              <List>
                {["présentation", "curriculum vitae", "projets", "contact"].map(
                  (text, index) => (
                    <ListItem button key={text}>
                      <a
                        href={`#${text
                          .normalize("NFD")
                          .replace(/[\u0300-\u036f-\s]/g, "")}`}
                        className="navBar__drawer-link"
                      >
                        {getIcon(index)}
                        <ListItemText
                          className="navBar__drawer-btn"
                          primary={text}
                        />
                      </a>
                    </ListItem>
                  )
                )}
              </List>
            </div>
          </Drawer>
        </AppBar>
      </div>
    </Fragment>
  );
}
