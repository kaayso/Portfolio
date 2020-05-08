import React from "react";
import "./pDescription.css";
import { useParams, Redirect } from "react-router-dom";
import Projects from "helpers/projects.js";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Badge from "components/badge/badge";
import LanguageIcon from "@material-ui/icons/Language";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function PDescription() {
  const [currentP, setCurrentP] = React.useState(null);
  const [redirect, setRedirection] = React.useState(false);
  let { slug } = useParams();
  const root = React.createRef();

  React.useEffect(() => {
    root.current.scrollTo(0, 0);
    const getCurrentP = () => {
      let result = null;
      Projects.forEach((p) => {
        if (p.id === slug) {
          result = p;
        }
      });
      return result;
    };
    const pFound = getCurrentP();
    pFound ? setCurrentP(pFound) : setRedirection(true);
  }, [slug]);

  if (redirect) {
    return <Redirect to="/" />; // TODO : redirect to 404 not found page
  } else {
    return (
      <Container ref={root} className="pDescription" maxWidth="lg">
        {currentP && (
          <div className="pDescription-wrapper">
            <div className="pDescription__header">
              <h1 className="pDescription__title">{currentP.name}</h1>
              <a
                className="pDescription__link"
                href={currentP.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                {currentP.sourceCode && <GitHubIcon />}
              </a>
              <a
                className="pDescription__link"
                href={currentP.webSite}
                target="_blank"
                rel="noopener noreferrer"
              >
                {currentP.webSite && <LanguageIcon />}
              </a>
            </div>
            <div className="pDescription__type">
              <div className="pDescription__point" />
              {currentP.type}
            </div>
            <div className="pDescription__society">
              <div className="pDescription__point" />
              {currentP.society}
            </div>
            <Grid container wrap="wrap-reverse">
              <Grid item xs={12} md={6} lg={6}>
                <h2 className="pDescription__purpose-title">objectifs</h2>
                <div className="pDescription__text-content">
                  {currentP.purpose}
                </div>

                <h2 className="pDescription__description-title">description</h2>
                <div className="pDescription__text-content">
                  {currentP.description}
                </div>

                <h2 className="pDescription__technos-title">technologies</h2>
                <div>
                  {currentP.technos.map((item) => {
                    return <Badge key={item} text={item} />;
                  })}
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                className="pDescription__img-container"
              >
                <img src={currentP.image} alt="" />
              </Grid>
            </Grid>
            <div
              className={`pDescription__pImage ${
                currentP.dev === "mobile" ? "pDescription__pImage--mobile" : ""
              }`}
            >
              {currentP.ressources.map((item) => {
                return <img key={item.id} src={item.img} alt="" />;
              })}
            </div>
          </div>
        )}
      </Container>
    );
  }
}
