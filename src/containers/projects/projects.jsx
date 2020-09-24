import React from 'react';
import './projects.css';
import Container from '@material-ui/core/Container';
import Navigation from 'components/navigation/navigation';
import PViewer from 'components/pViewer/pViewer';
import SscrapingLogo from 'assets/images/sscraping.svg';
import ItarverneFormation from 'assets/images/itarverne-formation.svg';
import Braincube from 'assets/images/braincube.svg';
import Esat from 'assets/images/esat.svg';
import Picshare from 'assets/images/picshare.svg';
import PlayToLearn from 'assets/images/playToLearn.svg';
import RecipeFinder from 'assets/images/recipe-finder.svg';

export default function Projects() {
  const [index, setIndex] = React.useState(0);
  const [pList, setPList] = React.useState([]);
  const rawCards = [
    {
      logo: RecipeFinder,
      title: 'Recipe Finder',
      subTitle: 'Développement web',
      route: '/recipeFinder',
      category: 'perso&sco',
    },
    {
      logo: Picshare,
      title: 'picshare',
      subTitle: 'Développement mobile',
      route: '/picshare',
      category: 'perso&sco',
    },
    {
      logo: SscrapingLogo,
      title: 'Sscraping',
      subTitle: 'Développement web',
      route: '/sscraping',
      category: 'pro',
    },
    {
      logo: Braincube,
      title: 'console live',
      subTitle: 'Développement web',
      route: '/braincube',
      category: 'pro',
    },
    {
      logo: PlayToLearn,
      title: 'play to learn',
      subTitle: 'Développement mobile',
      route: '/play-to-learn',
      category: 'perso&sco',
    },
    {
      logo: ItarverneFormation,
      title: 'itarverne formation',
      subTitle: 'Développement web',
      route: '/itarverne-formation',
      category: 'pro',
    },
    {
      logo: Esat,
      title: 'IME / ESAT',
      subTitle: 'Développement web',
      route: '/esat',
      category: 'pro',
    },
  ];

  React.useEffect(() => {
    const data = [...rawCards];
    setPList(data);
    // eslint-disable-next-line
  }, []);

  const nav = [
    {
      _key: 0,
      label: 'tout',
    },
    {
      _key: 1,
      label: 'professionnels',
    },
    {
      _key: 2,
      label: 'Scolaires & perso',
    },
  ];

  const handleNavigationClick = (index) => {
    if (index === 1) {
      const data = rawCards.filter((i) => i.category === 'pro');
      setPList(data);
    } else if (index === 2) {
      const data = rawCards.filter((i) => i.category === 'perso&sco');
      setPList(data);
    } else {
      setPList(rawCards);
    }
    setIndex(index);
  };

  return (
    <section id='creations'>
      <Container className='creations__container' maxWidth='lg'>
        <div className='projects__title'>créations</div>
        <div className='projects__sub-title'>
          <p>
            Un petit aperçus de mes projets <b>pro</b>,&nbsp;
            <b>scolaires</b> et <b>perso</b>.
          </p>
        </div>
        <Navigation click={handleNavigationClick} items={nav} index={index} />
        <div className='projects__content-container'>
          {pList.map((item) => (
            <PViewer
              key={item.title}
              logo={item.logo}
              title={item.title}
              subTitle={item.subTitle}
              route={item.route}
            />
          ))}
        </div>
      </Container>
      <svg
        width='1800'
        height='95'
        viewBox='0 0 1800 95'
        fill='none'
        className='creations__top-separator'
        preserveAspectRatio='none'
      >
        <path
          d='M0 0H2538.5L2331.5 46L2100 66.5L1919.5 46H1732.5L1322 86L847.5 62L410.5 95L0 50V0Z'
          fill='#353535'
        />
        <path
          d='M0 0H2538.5L2331.5 46L2100 66.5L1919.5 46H1732.5L1322 86L847.5 62L410.5 95L0 50V0Z'
          fill='#353535'
        />
      </svg>
    </section>
  );
}
