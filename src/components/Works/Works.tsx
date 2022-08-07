import React, { useContext } from "react";
import texts from "../../constants/texts";
import { LanguageContext } from "../../providers/LanguageContext";

// Types
import { TWorkCardModal } from "../../types/works";
import { Decor } from "../Decor/Decor";
// Types

// Components
import WorksCardContainer from "../WorksCardContainer/WorksCardContainer";
// Components

interface IWorks {
  handleOpenWorkModal: (state: boolean) => void;
  handleSetWorkCardInfo: (workCardInfo: TWorkCardModal) => void;
}

const Works: React.FC<IWorks> = ({
  handleOpenWorkModal,
  handleSetWorkCardInfo,
}) => {
  const { language } = useContext(LanguageContext);

  return (
    <section className="works" id="projects">
      <h2 className="works__title">{texts.works_title[language]}</h2>
      <WorksCardContainer
        handleOpenWorkModal={handleOpenWorkModal}
        handleSetWorkCardInfo={handleSetWorkCardInfo}
      />
      <Decor fill="#2a2a2a" />
    </section>
  );
};

export default Works;
