import React from "react";
import "./projects.css";
import Container from "@material-ui/core/Container";
import Navigation from "components/navigation/navigation";

export default function Projects() {
  const [index, setIndex] = React.useState(0);
  const nav = [
    {
      _key: 0,
      label: "tout",
    },
    {
      _key: 1,
      label: "professionnels",
    },
    {
      _key: 2,
      label: "Scolaires & perso",
    },
  ];
  return (
    <section id="creations">
      <Container maxWidth="lg">
        <div className="projects__title">créations</div>
        <div className="projects__sub-title">
          <p>
            Un petit aperçus de mes projets <b>scolaires</b>,&nbsp;
            <b>pro</b> et <b>perso</b>.
          </p>
        </div>
        <Navigation click={setIndex} items={nav} index={index} />
        <div className="projects__content-container"></div>
      </Container>
      <svg
        className="creations__top-separator"
        width="1800"
        height="95"
        viewBox="0 0 1800 95"
        fill="none"
      >
        <path
          d="M0 0H1800V44L1322 86L847.5 62L410.5 95L0 50V0Z"
          fill="#353535"
        />
      </svg>
    </section>
  );
}
