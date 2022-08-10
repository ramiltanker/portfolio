import React, { useContext } from "react";
import texts from "../../../../../../constants/texts";
import Typed from "react-typed";
import { LanguageContext } from "../../../../../../providers/LanguageContext";

type TitlePropsType = {
  text: string;
};

export const Title: React.FC<TitlePropsType> = ({ text }) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="header__title-box">
      <h2 className="header__title">{text}&nbsp;</h2>
      <Typed
        className="header__title"
        strings={[
          texts.header_name[language],
          texts.header_profession[language],
        ]}
        typeSpeed={100}
        backSpeed={80}
        loop
      />
    </div>
  );
};
