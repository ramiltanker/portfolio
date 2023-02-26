import React, { useContext, useState } from "react";

import texts from "../../constants/texts";
import { LanguageContext } from "../../providers/LanguageContext";

// Functions
import { openModal } from "../../utils/openModal";
// Functions

interface IWorksCard {
  handleOpenWorkModal: (state: boolean) => void;
  handleSetWorkCardInfo: () => void;
  title: string;
  shortDescription: string;
  clientName: string;
  projectValue: string;
  date: string;
  descriptionFirst: string;
  descriptionSecond: string;
  mainImage: string;
  exampleImageFirst: string;
  exampleImageSecond: string;
}

const WorksCard: React.FC<IWorksCard> = ({
  handleOpenWorkModal,
  handleSetWorkCardInfo,
  title,
  shortDescription,
  mainImage,
}) => {
  const { language } = useContext(LanguageContext);
  const [isCardInfoActive, setIsCardInfoActive] = useState<boolean>(false);

  const handleHoverOnCard = () => {
    setIsCardInfoActive(true);
  };

  const handleUnHoverOnCard = () => {
    setIsCardInfoActive(false);
  };

  const handleOpenModal = () => {
    openModal(handleOpenWorkModal);
    handleSetWorkCardInfo();
  };

  return (
    <div
      className="works__card"
      onMouseEnter={handleHoverOnCard}
      onMouseLeave={handleUnHoverOnCard}
    >
      <img
        src={mainImage}
        alt="test"
        className={`${
          isCardInfoActive ? "works__card-image-opacity" : ""
        } works__card-image`}
      />
      <div
        className={`${
          isCardInfoActive
            ? "works__card-info-active"
            : "works__card-info-unactive"
        } works__card-info`}
      >
        <p className="works__card-title">{title}</p>
        <p className="works__card-text">{shortDescription}</p>
        <button className="works__card-button" onClick={handleOpenModal}>
          {texts.works_card_button[language]}
        </button>
      </div>
    </div>
  );
};

export default WorksCard;
