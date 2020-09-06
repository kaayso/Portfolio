import React from 'react';
import './introduction.css';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { gsap } from 'gsap';
import { useIntersection } from 'react-use';

export default function Introduction() {
  const mobileBreakPoint = useMediaQuery('(max-width:959px)');
  const myRef = React.useRef(null);
  const THRESHOLD = mobileBreakPoint ? 0.3 : 0.55; // .55 for desktop and .3 for mobile

  const intersection = useIntersection(myRef, {
    root: null,
    rootMargin: '0px',
    threshold: THRESHOLD,
  });

  const animationsIn = (element1, element2) => {
    gsap.to(element1, 1, {
      ease: 'elastic',
      x: 0,
      opacity: 1,
    });
    gsap.to(element2, 1, {
      ease: 'elastic',
      x: 0,
      opacity: 1,
    });
  };
  const animationsOut = (element1, element2) => {
    gsap.to(element1, 1, {
      x: -80,
      ease: 'power4.out',
      opacity: 0,
    });
    gsap.to(element2, 1, {
      ease: 'power4.out',
      x: 80,
      opacity: 0,
    });
  };

  intersection && intersection.intersectionRatio > THRESHOLD
    ? animationsIn(
        '.accueil-left-container__content',
        '.accueil-right-container__content'
      )
    : animationsOut(
        '.accueil-left-container__content',
        '.accueil-right-container__content'
      );

  return (
    <section ref={myRef}>
      <Grid container id="accueil">
        <Grid item xs={12} md={6} lg={6} className="accueil-left-container">
          {!mobileBreakPoint && (
            <svg
              className="accueil__mobile-svg"
              viewBox="0 0 899 115"
              fill="none"
              preserveAspectRatio="none"
            >
              <path d="M0 115L691 0.5L899 19V115H0Z" fill="none" />
            </svg>
          )}
          <div className="accueil-left-container__separator"/>
          <div className="accueil-left-container__content">
            <div className="accueil-left-container__title">bonjour</div>
            <div className="accueil-left-container__sub-title">
              Et bienvenue !
            </div>
            <div className="accueil-left-container__paragraph">
              Je m’apelle <b>Faycel BENYOUSSA.</b> Je suis{' '}
              <b>développeur full-stack junior</b> passioné par le{' '}
              <b>dévellopement web &amp; mobile.</b>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6} className="accueil-right-container">
          {mobileBreakPoint && (
            <svg
              className="accueil-right-container__mobile-separator"
              viewBox="0 0 899 115"
              fill="none"
              preserveAspectRatio="none"
            >
              <path d="M0 115L691 0.5L899 19V115H0Z" fill="none" />
            </svg>
          )}
          <svg
            className="accueil-right-container__separator"
            viewBox="0 0 900 163"
            fill="none"
            preserveAspectRatio="none"
          >
            <path d="M0 66.6866L315 95L900 0V163H0V66.6866Z" fill="none" />
          </svg>
          <div className="accueil-right-container__filter"></div>
          <div className="accueil-right-container__content">
            dev <br />
           <span>web</span> <br />
            &amp; <br />
            <span>mobile</span>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
