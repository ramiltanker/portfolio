import React, { useContext } from "react";
import { LanguageContext } from "../../providers/LanguageContext";
import texts from "../../constants/texts";

interface ISkillsCard {
  name: string;
  info: string;
  link: string;
  icon: JSX.Element;
}

const SkillsCard: React.FC<ISkillsCard> = ({ name, info, link, icon }) => {
  const [isDotsRotate, setIsDotsRotate] = React.useState<boolean>(false);
  const { language } = useContext(LanguageContext);

  const handleRotateDots = () => {
    setIsDotsRotate(true);
  };

  const handleStopRotateDots = () => {
    setIsDotsRotate(false);
  };

  return (
    <div
      className="skills__card"
      onMouseEnter={handleRotateDots}
      onMouseLeave={handleStopRotateDots}
    >
      <div className="skills__image-container">
        <div
          className={`${
            isDotsRotate
              ? "skills__dots-container-rotate"
              : "skills__dots-container"
          } skills__dots-container`}
        >
          <div className="skills__dot-one"></div>
          <div className="skills__dot-two"></div>
        </div>
        {icon}
      </div>
      <div className="skills__card-info">
        <p className="skills__card-title">{name}</p>
        <p className="skills__card-text">{info}</p>
      </div>
      <a className="skills__card-button" href={link}>
        {texts.skills_card_button[language]}
      </a>
    </div>
  );
};

export default SkillsCard;
