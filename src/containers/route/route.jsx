import React from 'react';
import './route.css';
import Container from '@material-ui/core/Container';
import TimeLine from 'components/timeLine/timeLine';
import Grid from '@material-ui/core/Grid';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ApartmentIcon from '@material-ui/icons/Apartment';
import EventIcon from '@material-ui/icons/Event';

export default function Route() {
  const [activeIndex, setActiveIndex] = React.useState(2);
  const route = [
    {
      id: 0,
      year: '2018',
      society: 'Braincube',
      period: 'Mai-Septembre 2018',
      location: 'Issoire',
      description: [
        'Réécriture de la partie front de l’application tout en proposant un nouveau design et un outil plus ergonomique.',
        'Ajout de plusieurs fonctionnalités (front et back) : tri des éléments, liste de favoris, recherche dynamique, suivis des données au moyen d’un graphique sur les 24 dernières heures, classifications des erreurs selon leur type, pagination du contenu, etc...',
        'Mise en place des tests unitaire (front et back) et snapshot.',
      ],
      title: 'Développeur front-end React',
      subTitle: '{ stage }',
    },
    {
      id: 1,
      year: '2019',
      society: 'ITArverne',
      period: 'Avril-Septembre 2019',
      location: 'Sayat',
      description: [
        'Intégration de maquettes (page de présentation du produit, dashboard, espace client, etc...).',
        'Mise en place des tests de couvertures et tests unitaires.',
        "Réalisation d'une API de chat avec keybase et Nodejs.",
        "Développement d'un bot pour le reporting des tests de couverture et des bugs sur keybase.",
        'Mise en place de EmailJS pour l’envoi de mails côté client.',
        'Création de micro-services avec Docker.',
        'Intégration continue pour réaliser les tests, et vérifier la qualité de code.',
      ],
      title: 'Développeur front-end React',
      subTitle: '{ stage }',
    },
    {
      id: 2,
      year: '2020',
      society: 'ITArverne',
      period: 'Décembre-Avril 2020',
      location: 'Volvic',
      description: [
        "Maintenance & ajout de nouvelles fonctionnalités sur l'existant.",
        'Développement du site de formation de la société.',
        'Réalisation des tests de couvertures et tests unitaires.',
        'Amélioration du SEO.',
        'Rédaction de la documentation technique, offres de stage, et exercices de présélection des candidats.',
        'Rédaction d’articles sur la technologie ReactJs.',
        'Participation aux entretiens de stage.',
      ],
      title: 'Développeur full-stack React/Django',
      subTitle: '{ cdd }',
    },
  ];

  const navigate = (i) => {
    if (i < 0 || i > 2 || i === activeIndex) return;
    if (i < activeIndex) {
      document.getElementById('parcours-content-wrapper').className =
        ' slide-right';
      setTimeout(() => {
        setActiveIndex(i);
        document.getElementById('parcours-content-wrapper').className =
          ' slide-from-left';
      }, 100);
    } else {
      document.getElementById('parcours-content-wrapper').className =
        ' slide-left';
      setTimeout(() => {
        setActiveIndex(i);
        document.getElementById('parcours-content-wrapper').className =
          ' slide-from-right';
      }, 100);
    }
  };

  return (
    <section id='parcours'>
      <Container maxWidth='lg'>
        <div className='parcours__title'>parcours</div>
        <div className='parcours__wrapper'>
          <TimeLine
            route={route}
            setActiveIndex={navigate}
            activeIndex={activeIndex}
          />
          <div id='parcours-content-wrapper'>
            <div className='parcours-content__title'>
              {route[activeIndex].title}
            </div>
            <div className='parcours-content__sub-title'>
              {route[activeIndex].subTitle}
            </div>
            <Grid container className='parcours-grid'>
              <Grid
                className='parcours-grid__item parcours-grid__item--infos'
                item
                xs={12}
                md={8}
                lg={8}
              >
                <ul>
                  <li>
                    <EventIcon />
                    {route[activeIndex].period}
                  </li>
                  <li>
                    <ApartmentIcon />
                    {route[activeIndex].society}
                  </li>
                  <li>
                    <LocationOnIcon />
                    {route[activeIndex].location}
                  </li>
                </ul>
              </Grid>
              <Grid
                className='parcours-grid__item parcours-grid__item--tasks'
                item
                xs={12}
                md={8}
                lg={8}
              >
                <ul>
                  {route[activeIndex].description.map((item, index) => (
                    <li key={index}>
                      <span className='li-number'>{index + 1}. </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
      <svg
        width='1219'
        height='1249'
        viewBox='0 0 1219 1249'
        fill='none'
        id='vertical-separator'
        preserveAspectRatio='none'
      >
        <path
          d='M37 590.5L143.5 245.5L107 115.5L198.5 0H1238.5V568V1248.5H0L54 1156L44.5 1061.5L107 903L37 590.5Z'
          fill='none'
        />
      </svg>
    </section>
  );
}
