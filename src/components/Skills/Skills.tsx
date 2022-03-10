import React from "react";

// Components
import SkillsCardContainer from "../SkillsCardContainer/SkillsCardContainer";
import { Decor } from "../Decor/Decor";
// Components

interface ISkills {}

const Skills: React.FC<ISkills> = ({}) => {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__title">My Skills</h2>
      <SkillsCardContainer />
      <Decor fill="#2a2a2a"/>
    </section>
  );
};

export default Skills;
