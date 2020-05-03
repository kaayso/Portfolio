import React from "react";
import Introduction from "containers/introduction/introduction";
import Development from "containers/development/development";
import Cv from "containers/cv/cv";
import Projects from "containers/projects/projects";

export default function Home() {
  return (
    <>
      <Introduction />
      <Development />
      <Cv />
      <Projects />
    </>
  );
}
