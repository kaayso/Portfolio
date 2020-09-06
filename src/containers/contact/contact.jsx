import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import './contact.css';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from 'components/button/button';
import emailjs from 'emailjs-com';
import { useSnackbar } from 'notistack';

export default function Contact({toggleDrawer, position, visible}) {
  const [inputs, setInputs] = React.useState({
    name: {
      text: '',
      error: false,
    },
    email: {
      text: '',
      error: false,
    },
    message: {
      text: '',
      error: false,
    },
  });
  const { enqueueSnackbar } = useSnackbar();

  const handleValue = (name) => (event) => {
    event.preventDefault();
    const tmpInputs = inputs;
    tmpInputs[name].text = event.target.value;
    setInputs(tmpInputs);
  };

  const handleSubmit = () => (event) => {
    event.preventDefault();
    // check inputs
    const checkedInputs = checkInputs();

    if (
      checkedInputs.name.error ||
      checkedInputs.email.error ||
      checkedInputs.message.error
    ) {
      // set error
      setInputs(checkedInputs);
      enqueueSnackbar("Le formulaire envoyé n'est pas valide", {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        preventDuplicate: true,
      });
    } else {
      // remove error before
      setInputs(checkedInputs);

      // close modal
      toggleDrawer(false, event);

      // send email
      const templateParams = {
        name: inputs.name.text,
        email: inputs.email.text,
        message: inputs.message.text,
      };

      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICEID,
          process.env.REACT_APP_EMAILJS_TEMPLATEID,
          templateParams
        )
        .then(
          function (response) {
            console.log('SUCCESS!', response.status, response.text);
            enqueueSnackbar('Message envoyé !', {
              variant: 'success',
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
              },
              preventDuplicate: true,
            });
          },
          function (error) {
            console.log('FAILED...', error);
            enqueueSnackbar('Erreur: Message non envoyé', {
              variant: 'error',
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
              },
              preventDuplicate: true,
            });
          }
        );
    }
  };

  const checkInputs = () => {
    const tmpInputs = { ...inputs };

    // check if any field is empty
    tmpInputs.name.error = !tmpInputs.name.text;
    tmpInputs.message.error = !tmpInputs.message.text;

    // check if email respect correct format
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    tmpInputs.email.error = !regex.test(inputs.email.text);

    return tmpInputs;
  };

  return (
    <SwipeableDrawer
      anchor={position}
      open={visible}
      onClose={(e) => toggleDrawer(false, e)}
      onOpen={(e) => toggleDrawer(true, e)}
    >
      <div className="contact-wrapper">
        <form noValidate className="contact-card">
          <div
            onClick={(e) => toggleDrawer(false, e)}
            className="contact-closer"
          >
            X
          </div>
          <div>
            <div className="contact-title">contact</div>
            <TextField
              id="filled-basic"
              className={`contact-input ${
                inputs.name.error ? 'input-error' : ''
              }`}
              label="Nom"
              variant="filled"
              onChange={handleValue('name')}
              required
              error={inputs.name.error}
            />
            <TextField
              id="filled-basic"
              className={`contact-input ${
                inputs.email.error ? 'input-error' : ''
              }`}
              label="Adresse e-mail"
              variant="filled"
              type="email"
              required
              error={inputs.email.error}
              onChange={handleValue('email')}
            />
            <TextareaAutosize
              className={`contact-text-area ${
                inputs.message.error ? 'text-area-error' : ''
              }`}
              aria-label="message"
              rowsMin={6}
              placeholder="Message..."
              onChange={handleValue('message')}
            />
            <Button
              onClick={handleSubmit()}
              className="contact-btn"
              title="Envoyer"
            />
          </div>
        </form>
      </div>
    </SwipeableDrawer>
  );
}
