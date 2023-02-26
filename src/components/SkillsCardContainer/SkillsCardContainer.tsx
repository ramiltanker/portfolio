import React, { useContext } from "react";

// Components
import SkillsCard from "../SkillsCard/SkillsCard";
// Components

import { LanguageContext } from "../../providers/LanguageContext";

// Types

// Types

// Skills Data
import skills from "../../constants/skills";
// Skills Data

interface ISkillsCardContainer {}

const SkillsCardContainer: React.FC<ISkillsCardContainer> = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="skills__cards-container">
      {skills.map(({ id, name, info, link, icon }) => {
        return (
          <SkillsCard
            key={id}
            name={name}
            info={info[language]}
            link={link}
            icon={icon}
          />
        );
      })}
    </div>
  );
};

export default SkillsCardContainer;
