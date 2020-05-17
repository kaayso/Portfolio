import React from "react";
import "./skills.css";
import Grid from "@material-ui/core/Grid";
import Badge from "components/badge/badge";

export default function Skills() {
  const rightWrapper = [
    {
      title: "compétences",
      content: [
        "Développement Front-end et Back-end",
        "Développement mobile cross-platform",
        "Responsive Design",
        "Microservices",
        "UI Design",
        "Déploiement",
      ],
    },
    {
      title: "savoir être",
      content: [
        "Sérieux, responsable, dynamique, entreprenant, soucieux du détail, curieux, aime le travail en équipe, et passionné par mon métier.",
      ],
    },
  ];

  const leftWrapper = [
    {
      title: "technologies",
      content: [
        "react",
        "docker",
        "node",
        "django",
        "mongoDB",
        "redux",
        "REST",
        "SemanticUI",
        "MaterialUI",
        "Bootstrap",
      ],
      badge: true,
    },
    {
      title: "auto-formation et initiations",
      content: ["express", "react-native", "android", "AngularJS", "graphQL"],
      badge: true,
    },
    {
      title: "outils",
      content: [
        "Versionnement du code: Git (Github ou Gitlab)",
        "Wireframes et mockups: Figma",
        "Éditeur de code : VSCODE",
        "Environnement de développement : MacOS, Linux",
      ],
      badge: false,
    },
  ];

  return (
    <section id="skills">
      <Grid container className="skills-grid">
        <Grid item sm={10} md={10} lg={4} className="skills-container">
          {leftWrapper.map((item, index) => (
            <div key={index} className="skills-item">
              <div className="skills-item__title">{item.title}</div>
              <ul className="skills-item__content">
                {item.badge
                  ? item.content.map((element, index) => (
                      <Badge key={index} text={element} color="#716060" />
                    ))
                  : item.content.map((element, index) => (
                      <li key={index} className="skills-item__line">
                        {element}
                      </li>
                    ))}
              </ul>
            </div>
          ))}
        </Grid>
        <Grid className="skills-container" item sm={10} md={10} lg={4}>
          {rightWrapper.map((item, index) => (
            <div className="skills-item" key={index}>
              <div className="skills-item__title">{item.title}</div>
              <ul className="skills-item__content">
                {item.content.map((element, index) => (
                  <li
                    key={index}
                    className={`skills-item__line ${
                      item.title === "savoir être"
                        ? "skills-item__content--paragraph"
                        : ""
                    }`}
                  >
                    {element}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Grid>
      </Grid>
      <svg
        width="2291"
        height="1785"
        viewBox="0 0 2291 1785"
        fill="none"
        id="skills-separator"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0L345.306 204.491L524.331 574.615L1040.38 831.981L1325.8 1295.75L2291 1785H0V0Z"
          fill="#F8F2EC"
        />
      </svg>
    </section>
  );
}
