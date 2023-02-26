import React, { useContext } from "react";
import texts from "../../constants/texts";

// Types
import { TWorkCardModal } from "../../types/works";
// Types

import { LanguageContext } from "../../providers/LanguageContext";

interface IWorkModalBody {
  workCardData?: TWorkCardModal;
}

const WorkModalBody: React.FC<IWorkModalBody> = ({ workCardData }) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="work-modal">
      <h2 className="work-modal__title">{workCardData?.title}</h2>
      <div className="work-modal__short-info">
        <p className="work-modal__info-text">
          {texts.works_modal_client[language]}
          <span>{workCardData?.clientName}</span>
        </p>
        <p className="work-modal__info-text">
          {texts.works_modal_value[language]}
          <span>{workCardData?.projectValue}</span>
        </p>
        <p className="work-modal__info-text">
          {texts.works_modal_date[language]}
          <span>{workCardData?.date[language]}</span>
        </p>
      </div>
      <div className="work-modal__text-block">
        <p className="work-modal__text-description">
          {workCardData?.descriptionFirst[language]}
        </p>
        <p className="work-modal__text-description">
          {workCardData?.descriptionSecond[language]}
        </p>
      </div>
      <div className="work-modal__images-block">
        <img
          src={workCardData?.exampleImageFirst}
          alt="test"
          className="work-modal__image"
        />
        <img
          src={workCardData?.exampleImageSecond}
          alt="test"
          className="work-modal__image"
        />
      </div>
      <div className="work-modal__link-box">
        <p className="work-modal__link-title">
          {texts.works_modal_link[language]}
        </p>
        <a className="work-modal__link" href={workCardData?.link}>
          {workCardData?.link}
        </a>
      </div>
    </div>
  );
};

export default WorkModalBody;
