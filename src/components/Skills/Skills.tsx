import React, { useContext } from "react";
import texts from "../../constants/texts";
// Components
import SkillsCardContainer from "../SkillsCardContainer/SkillsCardContainer";
import { Decor } from "../Decor/Decor";
// Components

import { LanguageContext } from "../../providers/LanguageContext";

interface ISkills {}

const Skills: React.FC<ISkills> = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className="skills" id="skills">
      <h2 className="skills__title">{texts.skills_title[language]}</h2>
      <SkillsCardContainer />
      <Decor fill="#2a2a2a" />
    </section>
  );
};

export default Skills;
