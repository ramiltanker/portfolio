import { useContext } from "react";
import texts from "../../constants/texts";
// Components
import ExperienceContainer from "../ExperienceContainer/ExperienceContainer";
// Components

// Experience Data
import { experience } from "../../constants/experience";
import { Decor } from "../Decor/Decor";
// Experience Data

import { LanguageContext } from "../../providers/LanguageContext";

const Experience = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className="experience" id="experience">
      <h2 className="experience__title">{texts.experience_title[language]}</h2>
      {experience.map(({ id, lastExp, name }) => {
        return <ExperienceContainer lastExp={lastExp} name={name} key={id} />;
      })}
      <Decor fill="#202020" />
    </section>
  );
};

export default Experience;
