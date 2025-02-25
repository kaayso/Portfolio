import React, { useState, Fragment } from 'react';
import './navBar.css';
import LogoFB from 'assets/images/logo_navBar.svg';
import Logo from 'assets/images/logo.svg';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { useLocation } from 'react-router-dom';

// Used only for media queries
const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    flexGrow: 1,
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    flexGrow: 1,
    position: 'fixed',
    bottom: 15,
    right: 20,
    zIndex: 98,
  },
}));

export default function NavBar({ toggleContactDrawer }) {
  const classes = useStyles();
  const [openBottom, setOpenBottom] = useState(false);
  const [links, setLinks] = useState([]);
  let location = useLocation();

  // Open/close the drawer for mobile
  const toggleDrawer = (open, event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenBottom(open);
  };

  React.useEffect(() => {
    if (location.pathname === '/') {
      setLinks(['accueil', 'créations', 'parcours', 'contact']);
    } else {
      setLinks(['accueil', 'contact']);
    }
  }, [location.pathname]);

  const switchFromMenuToContactDrawer = () => (event) => {
    toggleContactDrawer(true, event);
    toggleDrawer(false, event);
  };

  return (
    <Fragment>
      <div className={classes.sectionDesktop}>
        <Toolbar className='navBar'>
          <Button href='/'>
            <img className='navBar__logo' src={LogoFB} alt='Faycel Benyoussa' />
          </Button>
          <div className='navBar__btn-container'>
            {links.map((text) =>
              text === 'contact' ? (
                <Button
                  key={text}
                  onClick={(e) => toggleContactDrawer(true, e)}
                  size='small'
                  className='navBar__btn'
                >
                  {text}
                  <div className='navbar__btn--hover'>
                    <div className='navbar__btn--left-line'></div>
                    <div className='navbar__btn--point'></div>
                    <div className='navbar__btn--right-line'></div>
                  </div>
                </Button>
              ) : (
                <Button
                  key={text}
                  href={`${
                    text === `accueil`
                      ? `/`
                      : `#${text
                          .normalize('NFD')
                          .replace(/[\u0300-\u036f-\s]/g, '')}`
                  }`}
                  size='small'
                  className='navBar__btn'
                >
                  {text}
                  <div className='navbar__btn--hover'>
                    <div className='navbar__btn--left-line'></div>
                    <div className='navbar__btn--point'></div>
                    <div className='navbar__btn--right-line'></div>
                  </div>
                </Button>
              )
            )}
          </div>
        </Toolbar>
      </div>
      <div className={classes.sectionMobile}>
        <IconButton
          onClick={(e) => toggleDrawer(true, e)}
          color='inherit'
          aria-label='menu'
          className='navBar__menu-btn'
        >
          <svg
            className='MuiSvgIcon-root navBar__menuIcon'
            focusable='false'
            viewBox='0 0 24 24'
            aria-hidden='true'
            role='presentation'
          >
            <path d='M3 18h12v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'></path>
          </svg>
        </IconButton>
        <Drawer
          className='navBar__drawer-root'
          open={openBottom}
          onClose={(e) => toggleDrawer(false, e)}
          anchor='bottom'
        >
          <List>
            {links.map((text) =>
              text === 'contact' ? (
                <ListItem
                  key={text}
                  button
                  onClick={switchFromMenuToContactDrawer()}
                >
                  <ListItemText className='navBar__drawer-btn' primary={text} />
                </ListItem>
              ) : (
                <a
                  href={`${
                    text === `accueil`
                      ? `/`
                      : `#${text
                          .normalize('NFD')
                          .replace(/[\u0300-\u036f-\s]/g, '')}`
                  }`}
                  className='navBar__drawer-link'
                  onClick={(e) => toggleDrawer(false, e)}
                  key={text}
                >
                  <ListItem button>
                    <ListItemText
                      className='navBar__drawer-btn'
                      primary={text}
                    />
                  </ListItem>
                </a>
              )
            )}
          </List>
          <Divider />
          <div
            className='navBar__drawer-content'
            role='presentation'
            onClick={(e) => toggleDrawer(false, e)}
            onKeyDown={(e) => toggleDrawer(false, e)}
          >
            <img
              className='navBar__logo--mobile--drawer'
              src={Logo}
              alt='Faycel Benyoussa'
            />
          </div>
          <div
            onClick={(e) => toggleDrawer(false, e)}
            className='navBar__drawer-content--closer'
          >
            X
          </div>
        </Drawer>
      </div>
    </Fragment>
  );
}
