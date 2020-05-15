import React from "react";
import "./introduction.css";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function Introduction() {
  const mobileBreakPoint = useMediaQuery("(max-width:959px)");

  return (
    <section>
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
          <div className="accueil-left-container__content">
            <div className="accueil-left-container__title">bonjour</div>
            <div className="accueil-left-container__sub-title">
              Et bienvenue !
            </div>
            <div className="accueil-left-container__paragraph">
              Je m’apelle <b>Faycel BENYOUSSA.</b> Je suis{" "}
              <b>développeur full-stack junior</b> passioné par le{" "}
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
            web <br />
            &amp; <br />
            mobile
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
