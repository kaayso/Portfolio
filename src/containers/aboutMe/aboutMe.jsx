import "./aboutMe.css";
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Me from "assets/images/moi.png";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ProgressBar from "components/progressBar/progressBar";

export default function AboutMe() {
  return (
    <section id="presentation">
      <Container maxWidth="lg">
        <Grid container className="presentation__content">
          <Grid item xs={12} md={6} lg={6}>
            <Avatar alt="Faycel Benyoussa" src={Me} className="avatar" />
            <div className="presentation__infos-wrapper">
              <ul>
                <li>Benyoussa Faycel</li>
                <li>Développeur full-stack</li>
                <li>
                  <LocationOnIcon />
                  Clermont-Ferrand
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <div className="presentation__text">
              <h3>à propos de moi</h3>
              <div>
                Issue d'un parcours universitaire, je suis titulaire d'un master
                Génie Logiciel, Intégration d'Applications. Au cours de ma
                formation j'ai éffectué deux stages en entreprise en tant que
                développeur React et java. J'ai également réalisé 2 projets
                scolaires pour le développement de deux applications mobile avec
                Android et React-Native. Suite à l'obtention de mon dilplôme,
                j'ai intégré l'entreprise ITArverne en tant que développeur
                full-stack sur les technologies React et Django. Passionné par
                le développement web et mobile, motivé, polyvalent et très
                autonome, je saurai m'adapter afin de répondre au mieux à vos
                besoins.
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} />
          <Grid item xs={12} md={6} lg={6}>
            <div className="progressBar-container">
              <ProgressBar
                className="progressBar"
                index={0}
                interval={100}
                label="organisation"
              />
              <ProgressBar
                className="progressBar1"
                index={1}
                interval={75}
                label="autonomie"
              />
              <ProgressBar
                className="progressBar2"
                index={2}
                interval={50}
                label="adaptation"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" id="curve" viewBox="0 0 1800 279">
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M777.5 19.5C391.5 54 275 158 -398.5 -163.5L16.5 -56.5L1379.5 -105.5L2013 -6.5C2013 -6.5 2145.82 -61.6766 2120.5 -30.5C1939 193 1750.5 254 1566 245.5C1381.5 237 1163.5 -15 777.5 19.5Z"
          fill="#FFF"
        />
      </svg>
    </section>
  );
}
