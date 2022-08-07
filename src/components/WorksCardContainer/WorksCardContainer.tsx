import React, { useContext } from "react";

// Components
import WorksCard from "../WorksCard/WorksCard";
// Components

// Types
import { TWorkCardModal } from "../../types/works";
// Types

// Works Data
import worksData from "../../constants/works";
// Works Data

import { LanguageContext } from "../../providers/LanguageContext";

interface IWorksCardContainer {
  handleOpenWorkModal: (state: boolean) => void;
  handleSetWorkCardInfo: (workCardInfo: TWorkCardModal) => void;
}

const WorksCardContainer: React.FC<IWorksCardContainer> = ({
  handleOpenWorkModal,
  handleSetWorkCardInfo,
}) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="works__cards-container">
      {worksData.map(
        ({
          title,
          shortDescription,
          clientName,
          projectValue,
          date,
          descriptionFirst,
          descriptionSecond,
          mainImage,
          exampleImageFirst,
          exampleImageSecond,
          link,
          id,
        }) => {
          const workCardModalInfo = {
            title,
            clientName,
            projectValue,
            date,
            descriptionFirst,
            descriptionSecond,
            exampleImageFirst,
            exampleImageSecond,
            link,
          };

          return (
            <WorksCard
              key={id}
              handleOpenWorkModal={handleOpenWorkModal}
              handleSetWorkCardInfo={() =>
                handleSetWorkCardInfo(workCardModalInfo)
              }
              title={title}
              shortDescription={shortDescription[language]}
              clientName={clientName}
              projectValue={projectValue}
              date={date[language]}
              descriptionFirst={descriptionFirst[language]}
              descriptionSecond={descriptionSecond[language]}
              mainImage={mainImage}
              exampleImageFirst={exampleImageFirst}
              exampleImageSecond={exampleImageSecond}
            />
          );
        }
      )}
    </div>
  );
};

export default WorksCardContainer;
