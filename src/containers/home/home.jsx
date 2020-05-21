import React from 'react';
import Introduction from 'containers/introduction/introduction';
import Development from 'containers/development/development';
import Cv from 'containers/cv/cv';
import Projects from 'containers/projects/projects';
import Route from 'containers/route/route';
import Skills from 'containers/skills/skills';

export default function Home() {
  return (
    <div>
      <Introduction />
      <Development />
      <Cv />
      <Projects />
      <Route />
      <Skills />
    </div>
  );
}
