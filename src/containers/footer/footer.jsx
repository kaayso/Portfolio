import React from "react";
import "./footer.css";
import Grid from "@material-ui/core/Grid";
import Logo from "assets/images/logo.svg";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import Tooltip from "@material-ui/core/Tooltip";

export default function Footer() {
  const roadMap = [
    {
      link: "/",
      label: "accueil",
    },
    {
      link: "/#creations",
      label: "créations",
    },
    {
      link: "/#parcours",
      label: "parcours",
    },
    {
      link: "",
      label: "contact",
    },
  ];

  const contactLinks = [
    {
      icon: <MailIcon />,
      label: "mail",
    },
    {
      icon: <LinkedInIcon />,
      label: "linkedIn",
      link: "https://www.linkedin.com/in/faycel-benyoussa-4525a2157/",
    },
    {
      icon: <GitHubIcon />,
      label: "github",
      link: "https://github.com/kaayso?tab=repositories",
    },
  ];
  return (
    <section id="footer">
      <Grid container className="footer__grid" wrap="wrap-reverse">
        <Grid item xs={6} md={6} lg={3} className="footer__grid-item">
          <div>
            <div className="footer__section-title">plan du site</div>
            <ul>
              {roadMap.map((element) => (
                <li key={element.label}>
                  {element.label === "contact" ? (
                    <Tooltip title={element.label} placement="top">
                      <Button onClick={() => console.log("email sent !")}>
                        {element.label}
                      </Button>
                    </Tooltip>
                  ) : (
                    <Tooltip title={element.label} placement="top">
                      <Button href={element.link}>{element.label}</Button>
                    </Tooltip>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Grid>
        <Grid item xs={6} md={6} lg={3} className="footer__grid-item">
          <div>
            <div className="footer__section-title">contact</div>
            <ul>
              {contactLinks.map((element) => (
                <li key={element.label}>
                  {element.label === "mail" ? (
                    <Tooltip title={element.label} placement="top">
                      <Button onClick={() => console.log("email sent !")}>
                        {element.icon}
                        {element.label}
                      </Button>
                    </Tooltip>
                  ) : (
                    <Tooltip title={element.label} placement="top">
                      <Button href={element.link} target="_blank">
                        {element.icon}
                        {element.label}
                      </Button>
                    </Tooltip>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={6} className="intro">
          <div>
            <div className="intro__header"></div>
            <div className="intro__title">Qui suis-je ?</div>
            <div className="intro__content">
              Développeur full-stack junior passionné par le développement web
              et mobile. Je suis diplômé d'un Master Génie Logiciel, Intégration
              d'applications à l'UCA. En terme d'expérience j'ai d'abord
              commencé en tant que développeur web front-end puis j'ai basculé
              peu à peu vers le développement full-stack. Motivé, polyvalent et
              très autonome, je saurai m'adapter afin de répondre au mieux à vos
              besoins.
            </div>
          </div>
        </Grid>
        {/* présentation rapide (celle du cv) */}
      </Grid>
      <div className="footer__band">
        <img className="footer__logo" src={Logo} alt="fb" />
        <span className="footer__copy-right">
          © Faycel BENYOUSSA 2020_Développeur Full-Stack
        </span>
      </div>
    </section>
  );
}
