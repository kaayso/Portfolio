import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import './toTopBtn.css';

export default function ToTopBtn() {
  return (
    <IconButton href="#app-root" className="toTopBtn ">
      <KeyboardArrowUpIcon />
    </IconButton>
  );
}
