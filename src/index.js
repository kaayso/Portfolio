import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app';
import emailjs from 'emailjs-com';
import { SnackbarProvider } from 'notistack';

require('dotenv').config();
emailjs.init(process.env.REACT_APP_EMAILJS_UID);
ReactDOM.render(
  <SnackbarProvider maxSnack={3}>
    <App />
  </SnackbarProvider>,
  document.getElementById('root')
);
