import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import './toTopBtn.css';
import { useWindowScroll } from 'react-use';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function ToTopBtn() {
  const [isMount, setIsMount] = React.useState(false);
  React.useEffect(() => {
    setIsMount(true);
  }, []);
  const mobileBreakPoint = useMediaQuery('(max-width:959px)');
  const { y } = useWindowScroll();

  const toTopBtnVisible = !mobileBreakPoint && y > 1500 && isMount;

  if (document.getElementById('toTopBtn')) {
    if (toTopBtnVisible) {
      document.getElementById('toTopBtn').className =
        'MuiButtonBase-root MuiIconButton-root toTopBtn toTopBtn-slide-from-right';
    } else {
      console.log('up');

      document.getElementById('toTopBtn').className =
        'MuiButtonBase-root MuiIconButton-root toTopBtn toTopBtn-slide-right';
    }
  }
  return (
    <IconButton href="#app-root" className="toTopBtn" id="toTopBtn">
      <KeyboardArrowUpIcon />
    </IconButton>
  );
}
