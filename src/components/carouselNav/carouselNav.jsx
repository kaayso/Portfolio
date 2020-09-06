import React from 'react';
import './carouselNav.css';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

export default function CarouselNav({navigate, index}) {
  return (
    <div className="carouselNav">
      <Tooltip title="Précédent">
        <Button
          onClick={() => navigate(index - 1)}
          className="carouselNav__btn-left-btn"
        >
          <ChevronLeft />
        </Button>
      </Tooltip>
      <div
        onClick={() => navigate(0)}
        className={`carouselNav__state${index === 0 ? '--active' : ''}`}
      >
        <div />
      </div>
      <div
        onClick={() => navigate(1)}
        className={`carouselNav__state${index === 1 ? '--active' : ''}`}
      >
        <div />
      </div>
      <div
        onClick={() => navigate(2)}
        className={`carouselNav__state${index === 2 ? '--active' : ''}`}
      >
        <div />
      </div>
      <Tooltip title="Suivant">
        <Button
          onClick={() => navigate(index + 1)}
          className="carouselNav__btn-right-btn"
        >
          <ChevronRight />
        </Button>
      </Tooltip>
    </div>
  );
}
