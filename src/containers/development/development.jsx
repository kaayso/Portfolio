import React from 'react';
import './development.css';
import Grid from '@material-ui/core/Grid';
import DevItem from 'components/devItem/devItem';
import Navigator from 'components/carouselNav/carouselNav';
import Button from 'components/button/button';
import { gsap } from 'gsap';
import { useIntersection } from 'react-use';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function Development() {
  const [index, setIndex] = React.useState(0);
  const mobileBreakPoint = useMediaQuery('(max-width:959px)');

  const dico = [
    {
      subject: 'dev-front',
      title: 'développement front',
      content:
        "J’utilise les langages <b>HTML5/CSS3</b>, <b>Javascript</b>, le préprocesseur <b>SASS</b> et également la librarie <b>React</b>. J'utilise aussi les frameworks CSS <b>SemanticUI, MaterialUI et Bootstrap</b>. En parrallèle de tout ça je m’auto-forme sur le framework <b>Angular</b>. Il est important pour moi de maitriser plusieurs technologies afin de m’adapter au mieux aux différents besoins...",
    },
    {
      subject: 'dev-mob',
      title: 'développement mobile',
      content:
        "Je suis capable de créer des applications mobile <b>cross-plateforme</b> (Android et IOS) en utilisant le framework <b>React-Native</b> avec la librairie <b>NativeBase</b>. Je suis également capable de réaliser des <b>applications 100% natives</b> (Android). Pour ce faire, j'utilise les languages <b>JAVA/XML</b> avec Android Studio.",
    },
    {
      subject: 'dev-back',
      title: 'développement back',
      content:
        "Le développement des fonctionnalités et le traitement des données sont réalisés à l'aide du framework <b>Express</b> ou <b>Django</b> avec <b>MongoDB</b> (NoSql) ou <b>PostgreSQL</b> (Relationelle). En terme d'architecture, j'utilise <b>l'architecture microservices</b> via <b>Docker</b> afin de séparer les différentes responsabilités d'une application.",
    },
  ];

  const navigate = (i) => {
    if (i < 0 || i > 2 || i === index) return;
    if (i < index) {
      document.getElementById('devItem-wrapper').className =
        'MuiGrid-root MuiGrid-container slide-right';
      setTimeout(() => {
        setIndex(i);
        document.getElementById('devItem-wrapper').className =
          'MuiGrid-root MuiGrid-container slide-from-left';
      }, 200);
    } else {
      document.getElementById('devItem-wrapper').className =
        'MuiGrid-root MuiGrid-container slide-left';
      setTimeout(() => {
        setIndex(i);
        document.getElementById('devItem-wrapper').className =
          'MuiGrid-root MuiGrid-container slide-from-right';
      }, 200);
    }
  };

  const myRef = React.useRef(null);
  const THRESHOLD = 0.3;
  const intersection = useIntersection(myRef, {
    root: null,
    rootMargin: '0px',
    threshold: THRESHOLD,
  });

  const animationsIn = (element1) => {
    gsap.to(element1, 2, {
      ease: 'power4.out',
      opacity: 1,
      scale: 0.95,
    });
  };
  const animationsOut = (element1) => {
    gsap.to(element1, 1, {
      ease: 'power4.out',
      opacity: 0,
      scale: 0,
    });
  };

  if (!mobileBreakPoint) {
    intersection && intersection.intersectionRatio > THRESHOLD
      ? animationsIn('.dev-img')
      : animationsOut('.dev-img');
  }

  return (
    <section ref={myRef} id='dev'>
      <div className='carousel-container'>
        <Grid id='devItem-wrapper' container>
          <DevItem
            title={dico[index].title}
            content={dico[index].content}
            dev={dico[index].subject}
          />
        </Grid>
        <Navigator navigate={navigate} index={index} />
      </div>
      <Button className='dev__btn' href='#creations' title='mes créations' />
      <svg
        width='1800'
        height='194'
        viewBox='0 0 1800 194'
        fill='none'
        className='dev__bottom-separator'
        preserveAspectRatio='none'
      >
        <path
          d='M1488 123.5L989.5 84.5005L588 123.5L217.501 123.5L-1.00002 178.498L-0.0359101 15.0005L2509.5 15.0006L2144 123.5L1836 84.5005L1488 123.5Z'
          fill='#716060'
        />
      </svg>
    </section>
  );
}
