import "./cv.css";
import React from "react";
import Container from "@material-ui/core/Container";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FormationItem from "components/formationItem/formationItem";
import ExperienceItem from "components/experienceItem/experienceItem";
import DownloadIcon from "assets/images/download_icon.svg";
import EmailIcon from "assets/images/email_icon.svg";
import PhoneIcon from "assets/images/phone_icon.svg";
import Tooltip from "@material-ui/core/Tooltip";
import DoneAllIcon from "@material-ui/icons/DoneAll";

function Cv(props) {
  const [activeIndex, setIndex] = React.useState(1);
  const [showNotification, setNotification] = React.useState(false);

  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };

  const formation = [
    {
      title: "Master Génie Logiciel, Intégration d’Applications",
      content: ["Université Clermont Auvergne", "2019"]
    },
    {
      title: "Licence informatique",
      content: ["Université Clermont Auvergne", "2016"]
    },
    {
      title: "BTS Conception de Produits industriels",
      content: ["Lycée Godefroy-de-Bouillon", "2012"]
    },
    {
      title: "Baccalauréat professionnel Technicien d’usinage",
      content: ["Lycée professionnel Roger Claustres", "2011"]
    }
  ];

  const experiences = [
    {
      title:
        "Développeur full-stack, ITArverne, décembre 2019 - avril 2020 (4mois).",
      year: 2020,
      content:
        "Développement et maintenance d’une application de gestion d’un établissement de santé. Réalisation du site de formation de la société. Amélioration du SEO sur le site de formation. Rédaction de la documentation technique, offres de stage, et exercices de préselection des condidats. Rédaction d’articles sur React. Participation aux entretiens de stage.",
      last: false,
      tags:
        "#React #Django #TentCSS #REST #SemanticUI #Redux #GitlabCICD #Docker #Jest #Enzyme"
    },
    {
      title:
        "Stage en entreprise, ITArverne, avril 2019 - septembre 2019 (6mois).",
      year: 2019,
      content:
        "Développement front-end d’une application SAAS (Sscraping) permettant d'optimiser le contenu CSS d’un site web. Réalisation d'une API de chat avec keybase. Mise en place d'un bot pour le reporting des tests de couverture et des bugs sur keybase. Intégration de Graphcool dans le projet.",
      last: false,
      tags:
        "#GraphQL #React #Relay #Redux #Codeclimate #GitlabCICD #Docker #Jest #Enzyme"
    },

    {
      title: "Projet Master 2 informatique, Université Clermont Auvergne.",
      year: 2019,
      content:
        "Application mobile permettant de tester ses connaissances sur le thème de la programmation. Vous avez la possibilité de défier vos amis sur différents techonologies/langages de programmation, gagner des points pour améliorer votre classement, relever les challenges de la semaine...",
      last: false
    },

    {
      title:
        "Stage en entreprise, Braincube, mai 2018 - septembre 2018 (4mois).",
      year: 2018,
      content:
        "Refonte & amélioration de la console d’administration des Braincube Live avec React & Bootstrap pour le front-end et java pour le back-end.",
      last: false
    },

    {
      title: "Projet Master 1 informatique, Université Clermont Auvergne.",
      year: 2018,
      content:
        "Réalisation d’une application de partage de photos en version web et mobile. Projet réalisé avec Android studio et AngularJS.",
      last: false
    },
    {
      title:
        "Projet de fin d’étude, licence informatique, Université Clermont Auvergne.",
      year: 2016,
      content: "Conception et réalisation d’un parser XML en java.",
      last: false
    },
    {
      title: "Réalisation d'un site web, projet personnel.",
      year: 2015,
      content:
        "Conception et réalisation d’un simple site web en HTML, CSS, JS, PHP, et MYSQL.",
      last: true
    }
  ];

  const onCopy = name => {
    const copyText = document.getElementById(name);
    navigator.clipboard.writeText(
      copyText.innerText
        .split("")
        .reverse()
        .join("")
    );
    if (!showNotification) {
      setNotification(true);
      setTimeout(() => {
        setNotification(false);
      }, 1300);
    }
  };

  return (
    <div id="curriculumvitae">
      {showNotification && (
        <div className="notification">
          <DoneAllIcon /> Copié
        </div>
      )}
      <Container maxWidth="lg">
        <div className="curriculumvitae__title">Curriculum vitae</div>
        <Tabs
          value={activeIndex}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          className="curriculumvitae__tabs"
        >
          <Tab label="formation" />
          <Tab label="expériences" />
          <Tab label="compétences" />
        </Tabs>
        {activeIndex === 0 && (
          <div className="curriculumvitae__content">
            {formation.map(item => (
              <FormationItem title={item.title} content={item.content} />
            ))}
          </div>
        )}
        {activeIndex === 1 && (
          <div className="curriculumvitae__content">
            {experiences.map(item => (
              <ExperienceItem
                year={item.year}
                title={item.title}
                content={item.content}
                last={item.last}
                tags={item.tags}
              />
            ))}
          </div>
        )}
        <div className="curriculumvitae__links-container">
          <Tooltip title="Télécharger" placement="top">
            <div className="curriculumvitae__link">
              <div className="curriculumvitae__icon">
                <img src={DownloadIcon} alt="" />
              </div>
              <a
                href="/ressources/Benyoussa_faycel_cv.pdf"
                target="_blank"
                download
              >
                Télécharger le CV au format PDF
              </a>
            </div>
          </Tooltip>
          <Tooltip title="Copier" placement="top">
            <div
              className="curriculumvitae__link"
              onClick={() => onCopy("email-link")}
            >
              <div className="curriculumvitae__icon">
                <img src={EmailIcon} alt="" />
              </div>
              <div className="g-reverse-text" id="email-link">
                moc.liamg@assuoyneb.lecyaf
              </div>
            </div>
          </Tooltip>
          <Tooltip title="Copier" placement="top">
            <div
              className="curriculumvitae__link"
              onClick={() => onCopy("phone-link")}
            >
              <div className="curriculumvitae__icon">
                <img src={PhoneIcon} alt="" />
              </div>
              <div className="g-reverse-text" id="phone-link">
                03 86 45 47 60
              </div>
            </div>
          </Tooltip>
        </div>
      </Container>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        id="curve-cv"
        viewBox="0 0 1800 279"
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M932 160C562.544 164.642 -0.5 0 -0.5 0L-91.5 31L-24.5 283.5L1871.5 335L1799 0C1799 0 1276.27 155.674 932 160Z"
          fill="#fff"
        />
      </svg> */}
    </div>
  );
}

export default Cv;
