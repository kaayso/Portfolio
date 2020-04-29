import React from "react";
import "./development.css";
import Grid from "@material-ui/core/Grid";
import DevItem from "components/devItem/devItem";
import Navigator from "components/carouselNav/carouselNav";
import Button from "components/button/button";

export default function Development() {
  const [index, setIndex] = React.useState(0);
  const dico = [
    {
      subject: "dev-front",
      title: "développement front",
      content:
        "J’utilise les langages <b>HTML5/CSS3</b>, <b>Javascript</b> et le préprocesseur <b>SASS</b> et également la librarie <b>React</b> ainsi que les frameworks CSS <b>SemanticUI, MaterialUI et Bootstrap</b>. En parrallèle de ça je m’auto-forme sur le framework <b>Angular</b>. Il est important pour moi de maitriser plusieurs technologies afin de m’adapter au mieux aux différents besoins...",
    },
    {
      subject: "dev-mob",
      title: "développement mobile",
      content:
        "Je suis capable de créer des applications mobile <b>cross-plateforme</b> (Android et IOS) et pour celà j'utilise le framework <b>React-Native</b>. Pour la réalisation des <b>applications natives</b> (Android), j'utilise les languages <b>JAVA/XML</b> avec Android Studio.",
    },
    {
      subject: "dev-back",
      title: "développement back",
      content:
        "La partie serveur de mes applications est généralement réalisée à l'aide du framework <b>Express</b> (JavaScript) ou <b>Django</b> (Python). La base de données quant à elle, est réalisée avec <b>MongoDB</b> (NoSql) ou <b>Postgres</b> (Relationelle). Pour séparer les différentes responsabilités des applications, j'utilise <b>l'architecture microservices</b> avec <b>Docker</b>.",
    },
  ];

  const navigate = (i) => {
    if (i < 0 || i > 2) return;
    if (i < index) {
      document.getElementById("devItem-wrapper").className =
        "MuiGrid-root MuiGrid-container slide-right";
      setTimeout(() => {
        setIndex(i);
        document.getElementById("devItem-wrapper").className =
          "MuiGrid-root MuiGrid-container slide-from-left";
      }, 200);
    } else {
      document.getElementById("devItem-wrapper").className =
        "MuiGrid-root MuiGrid-container slide-left";
      setTimeout(() => {
        setIndex(i);
        document.getElementById("devItem-wrapper").className =
          "MuiGrid-root MuiGrid-container slide-from-right";
      }, 200);
    }
  };

  return (
    <section id="dev">
      <div className="carousel-container">
        <Grid id="devItem-wrapper" container>
          <DevItem
            title={dico[index].title}
            content={dico[index].content}
            dev={dico[index].subject}
          />
        </Grid>
      </div>
      <Navigator navigate={navigate} index={index} />
      <Button title="mes créations" />
    </section>
  );
}