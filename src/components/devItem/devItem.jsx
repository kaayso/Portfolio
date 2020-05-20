import React from 'react';
import Grid from '@material-ui/core/Grid';
import './devItem.css';

export default function DevItem(props) {
  React.useEffect(() => {
    document.querySelector('.dev-text__content').innerHTML = props.content;
  }, [props.content]);
  return (
    <>
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        className="carousel-container__left-part"
      >
        <div className="bg-logo"></div>
        <div className={`animation-wrapper-${props.dev} dev-img`}>
          <div className="animation-square">
            <div className="animation-circle-one"></div>
          </div>
          <div className="animation-square--speed">
            <div className="animation-circle-two"></div>
          </div>
          <div className="animation-square">
            <div className="animation-circle-three"></div>
          </div>
          <div className="animation-square--speed">
            <div className="animation-circle-four"></div>
          </div>
          <div className="animation-square">
            <div className="animation-circle-five"></div>
          </div>
          <div className="animation-square">
            <div className="animation-circle-six"></div>
          </div>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        className="carousel-container__right-part"
      >
        <div className="dev-text">
          <div className="dev-text__title">{props.title}</div>
          <div className="dev-text__content"></div>
        </div>
      </Grid>
    </>
  );
}
