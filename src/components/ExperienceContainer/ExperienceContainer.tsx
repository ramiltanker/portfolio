import React, { useContext } from "react";

// Components
import ExperienceCard from "../ExperienceCard/ExperienceCard";
// Components

import { LanguageContext } from "../../providers/LanguageContext";

type TLastExp = {
  id: number;
  title: { ru: string; en: string };
  time: { ru: string; en: string };
  description: { ru: string; en: string };
};

interface IExperienceContainer {
  lastExp: Array<TLastExp>;
  name: string;
}

const ExperienceContainer: React.FC<IExperienceContainer> = ({
  lastExp,
  name,
}) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="experience__container">
      {lastExp.map(({ id, title, time, description }) => {
        return (
          <ExperienceCard
            key={id}
            title={title[language]}
            time={time[language]}
            description={description[language]}
          />
        );
      })}
    </div>
  );
};

export default ExperienceContainer;
