import React from 'react';
import Introduction from 'containers/introduction/introduction';
import Development from 'containers/development/development';
import Cv from 'containers/cv/cv';
import Projects from 'containers/projects/projects';
import Route from 'containers/route/route';
import Skills from 'containers/skills/skills';
import { gsap } from 'gsap';
import { useIntersection } from 'react-use';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function Home() {
  const mobileBreakPoint = useMediaQuery('(max-width:959px)');
  const myRef = React.useRef(null);
  const THRESHOLD = 0.4;

  const intersection = useIntersection(myRef, {
    root: null,
    rootMargin: '0px',
    threshold: THRESHOLD,
  });

  const animationsIn = (element1) => {
    console.log('animationsIn');
    gsap.to(element1, 1, {
      ease: 'elastic',
      x: 0,
      opacity: 1,
    });
  };
  const animationsOut = (element1) => {
    console.log('animationsOut');
    console.log(intersection && intersection.intersectionRatio);

    gsap.to(element1, 1, {
      x: 80,
      ease: 'power4.out',
      opacity: 1,
    });
  };

  intersection && intersection.intersectionRatio > THRESHOLD
    ? animationsIn('.toTopBtn')
    : animationsOut('.toTopBtn');
  return (
    <div ref={myRef}>
      <Introduction />
      <Development />
      <Cv />
      <Projects />
      <Route />
      <Skills />
    </div>
  );
}
