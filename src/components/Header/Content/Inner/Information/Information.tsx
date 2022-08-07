import React, { useContext } from "react";
import texts from "../../../../../constants/texts";
import { Subtitle } from "./Inner/Subtitle";
import { Title } from "./Inner/Title";
import { ArrowDown } from "./Inner/ArrowDown";
import { Button } from "../../../../Button/Button";
import { LanguageContext } from "../../../../../providers/LanguageContext";

export const Information: React.FC = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="header__box">
      <Subtitle text={texts.header_subtitle[language]} />

      <Title text={texts.header_title[language]} />

      <Button text={texts.header_button[language]} />

      <ArrowDown />
    </div>
  );
};
