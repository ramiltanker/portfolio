import { useState, useEffect } from 'react';

// Components
import ExperienceContainer from '../ExperienceContainer/ExperienceContainer';
// Components

// Experience Data
import { experience } from '../../constants/experience';
import { Decor } from '../Decor/Decor';
// Experience Data

const Experience = () => {

  return (
    <section className="experience" id="experience">
      <h2 className="experience__title">My Experience</h2>
      {experience.map(({id, lastExp, name}) => {
        return (
          <ExperienceContainer
            lastExp={lastExp}
            name={name}
            key={id}
          />
        );
      })}
      <Decor fill="#202020"/>
    </section>
  );
};

export default Experience;
