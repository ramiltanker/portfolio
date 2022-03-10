import React from "react";

// Components
import ExperienceCard from "../ExperienceCard/ExperienceCard";
// Components

type TLastExp = {
  id: number;
  title: string;
  time: string;
  description: string;
};

interface IExperienceContainer {
  lastExp: Array<TLastExp>;
  name: string;
}

const ExperienceContainer: React.FC<IExperienceContainer> = ({
  lastExp,
  name,
}) => {
  return (
    <div className="experience__container">
      {lastExp.map(({ id, title, time, description }) => {
        return (
          <ExperienceCard
            key={id}
            title={title}
            time={time}
            description={description}
          />
        );
      })}
    </div>
  );
};

export default ExperienceContainer;
