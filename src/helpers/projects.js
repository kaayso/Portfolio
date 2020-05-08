const sscraping = require("assets/images/sscraping.svg");
const itarverneFormation = require("assets/images/itarverne-formation.svg");
const picshare = require("assets/images/picshare.svg");
const playToLearn = require("assets/images/playToLearn.svg");
const esat = require("assets/images/esat.svg");
const braincube = require("assets/images/braincube.svg");
const ConsoleLive = require("assets/images/console_live.png");
const ConsoleErreurs = require("assets/images/console_erreurs.png");
const ItarverneFormation0 = require("assets/images/itarverne_formation0.png");
const ItarverneFormation1 = require("assets/images/itarverne_formation1.png");
const ItarverneFormation2 = require("assets/images/itarverne_formation2.png");
const ItarverneFormation3 = require("assets/images/itarverne_formation3.png");
const Sscraping0 = require("assets/images/sscraping0.png");
const Sscraping1 = require("assets/images/sscraping1.png");
const Sscraping2 = require("assets/images/sscraping2.png");
const PicShare0 = require("assets/images/picshare0.jpg");
const PicShare1 = require("assets/images/picshare1.jpg");
const PicShare2 = require("assets/images/picshare2.jpg");
const Ptl0 = require("assets/images/ptl0.png");
const Ptl1 = require("assets/images/ptl1.png");
const Ptl2 = require("assets/images/ptl2.png");
const Ptl3 = require("assets/images/ptl3.png");
const Ptl4 = require("assets/images/ptl4.png");
const Ptl5 = require("assets/images/ptl5.png");
const Ptl6 = require("assets/images/ptl6.png");
const Ptl7 = require("assets/images/ptl7.png");
const Ptl8 = require("assets/images/ptl8.png");
const Esat0 = require("assets/images/esat0.png");
const Esat1 = require("assets/images/esat1.png");
const Esat2 = require("assets/images/esat2.png");

const projects = [{
    id: "sscraping",
    name: "sscraping",
    type: "Projet professionnel",
    period: "Avril 2019 - septembre 2019",
    society: "ITArverne",
    technos: ["React", "Redux", "GraphQL", "Jest", "Enzyme", "SemanticUi", "GitlabCICD", "Codeclimate", "Docker"],
    description: "L'application Sscraping est une application de type SAAS. Elle permet d'optimiser le contenu CSS d’un site web. A partir de l'URL du site web, l’application parcourt récursivement le contenu pour en extraire les fichiers HTML/CSS. Ensuite, le contenu est analysé afin de vérifier si le CSS est utilisé de manière optimale en s’appuyant notamment sur la pertinence de chaque sélecteur. Enfin, les résultats de l’analyse sont visibles dans le tableau de bord de l’application. L’utilisateur peut alors visualiser grâce à des indicateurs de performance le nombre de sélecteurs supprimés, le poids total gagné, etc.... Il a également la possibilité de parcourir les fichiers CSS/HTML grâce à un graphe, de parcourir la liste des sélecteurs non utilisés, de consulter un résumé reprenant le nom de chaque page HTML avec les fichiers CSS associés, et de naviguer entre plusieurs résultats de scan grâce à \"l’historique des scans\".Les fichiers CSS optimisés sont disponibles directement en téléchargement depuis le tableau de bord ou alors accessibles via un CDN.",
    purpose: "Développement front-end de l'application Sscraping.",
    image: sscraping,
    dev: 'web',
    ressources: [{
        id: 'Sscraping0',
        img: Sscraping0
      },
      {
        id: 'Sscraping1',
        img: Sscraping1
      },
      {
        id: 'Sscraping2',
        img: Sscraping2
      }
    ],
    webSite: "http://sscraping.io/"
  }, {
    id: "itarverne-formation",
    name: "formation itarverne",
    type: "Projet professionnel",
    period: "Décembre 2019 - Mars 2020",
    society: "ITArverne",
    technos: ["React", "TentCss", "EmailJs"],
    description: "Création d'un site web permettant aux utilisateurs de consulter toutes les formations techniques disponibles et le détail de chaque programme. L'utilisateur a la possibilité de faire une demande de devis en personnalisant le programme de sa formation.",
    purpose: "Réalisation d'un site web exposant les formations techniques que propose ITArverne à ses clients.",
    image: itarverneFormation,
    dev: 'web',
    ressources: [{
        id: 'ItarverneFormation0',
        img: ItarverneFormation0
      }, {
        id: 'ItarverneFormation1',
        img: ItarverneFormation1
      },
      {
        id: 'ItarverneFormation2',
        img: ItarverneFormation2
      }, {
        id: 'ItarverneFormation3',
        img: ItarverneFormation3
      }
    ],
    webSite: "https://formation.itarverne.fr/"
  },
  {
    id: "braincube",
    name: "console live",
    type: "Projet professionnel",
    period: "Mai 2018 - Septembre 2018",
    society: "braincube",
    technos: ["React", "Enzyme", "Jest", "REST", "GitlabCICD"],
    description: "Réalisation d’une interface web destinée à une utilisation interne de Braincube. Cette application permet aux utilisateurs de gérer et de consulter rapidement les informations des Braincube Live ainsi que les erreurs envoyées par les différents services. Elle propose un système de filtrage qui permet d’afficher les erreurs par type et les Braincube Live selon leur état, leur nom, le nom du client auquel ils sont affiliés ou encore le nom du serveur auquel ils sont rattachés. L’application permet également d’afficher les Braincube Live inactifs, d’ajouter un Braincube Live dans une liste de favoris pour un suivi plus efficace, et de les trier par nom, retard ou client. Aussi, l’utilisateur peut gérer le contenu, comme par exemple, la suppression des Braincube Live, et la réinitialisation de leur état.",
    purpose: "Refonte graphique de la console d'administration des Braincubes Live, réécriture du code en React, et ajout de quelques fonctionnalités standards.",
    image: braincube,
    dev: 'web',
    ressources: [{
        id: 'ConsoleLive',
        img: ConsoleLive
      },
      {
        id: 'ConsoleErreurs',
        img: ConsoleErreurs
      }
    ],
  }, {
    id: "picshare",
    name: "picshare ",
    type: "Projet scolaire",
    period: "",
    society: "UCA",
    technos: ["Android", "firebase"],
    description: "Ce projet a été réalisé en master 1 informatique. C'est une application Android permettant aux utilisateurs de partager des photos dans un fil d'actualité (comme par exemple Instagram), de les commenter, de les liker etc... Aussi les utilisateurs ont la possibilité de se suivre et de s'ajouter en ami.",
    purpose: "Réalisation d’une application de partage de photos en version web et mobile.",
    image: picshare,
    dev: 'mobile',
    ressources: [{
        id: 'PicShare0',
        img: PicShare0
      },
      {
        id: 'PicShare1',
        img: PicShare1
      },
      {
        id: 'PicShare2',
        img: PicShare2
      },
    ],
    sourceCode: "https://github.com/kaayso/PicShare-Android-app-"
  }, {
    id: "play-to-learn",
    name: "play to learn",
    type: "Projet scolaire",
    period: "",
    society: "UCA",
    technos: ["React-Native", "Express", "MongoDB"],
    description: "Ce projet a été réalisé en master 2 informatique. Le projet s’inscrit dans le cadre d'une collaboration de l'UCA avec la société SOPRA STERIA. Il s'agit de réaliser une application de jeu “Play To Learn” présenté sous forme de quiz. Cette application va permettre aux utilisateurs d’apprendre en jouant sur les différents langages de programmation et de technologies. Les utilisateurs ont la possibilité de se challenger, et de réaliser plusieurs défis hebdomadaires ou journaliers afin gagner des points et monter au classement.",
    purpose: "Réalisation d’une application web/mobile permettent à ses utilisateurs de jouer à un jeu sous forme d'un quiz et se défier mutuellement. Les quiz reposent sur le thème de la programmation.",
    image: playToLearn,
    dev: 'mobile',
    ressources: [{
        id: 'ptl0',
        img: Ptl0
      },
      {
        id: 'ptl1',
        img: Ptl1
      },
      {
        id: 'ptl2',
        img: Ptl2
      },
      {
        id: 'ptl3',
        img: Ptl3
      },
      {
        id: 'ptl4',
        img: Ptl4
      },
      {
        id: 'ptl5',
        img: Ptl5
      }, {
        id: 'ptl6',
        img: Ptl6
      }, {
        id: 'ptl7',
        img: Ptl7
      }, {
        id: 'ptl8',
        img: Ptl8
      },
    ],
    sourceCode: "https://github.com/kaayso/PlayToLearn-Android-app-"
  }, {
    id: "esat",
    name: "ime / esat app",
    type: "Projet professionnel",
    period: "Décembre 2019 - Mars 2020",
    society: "ITArverne",
    technos: ["React", "Django", "SemanticUI", "Docker", "PostgreSQL", "Nginx"],
    description: "Application web de gestion d'un établissement de santé. Elle permet à l'utilisateur d'ajouter un nouveau patient, de consulter la période de séjour de ce dernier, de gérer les absences, de consulter la date d'entrée/sortie, d'uploader des documents, accèder au dossier médical et aux informations administratives du patient, etc...",
    purpose: "Amélioration de l'ergonomie de l'application et ajout de nouvelles fonctionnalités.",
    image: esat,
    dev: 'web',
    ressources: [{
      id: 'esat0',
      img: Esat0
    }, {
      id: 'esat1',
      img: Esat1
    }, {
      id: 'esat2',
      img: Esat2
    }, ],
  },
];

module.exports = projects;