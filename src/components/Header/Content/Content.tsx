import React, { useContext } from "react";
import texts from "../../../constants/texts";
import { CopyText } from "./Inner/CopyText";
import { MyImage } from "./Inner/MyImage";
import { Information } from "./Inner/Information/Information";
import { SocialLinks } from "./Inner/SocialLinks/SocialLinks";
import { LanguageContext } from "../../../providers/LanguageContext";

export const Content: React.FC = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="header__content">
      <div className="container">
        <div className="header__wrap">
          <Information />
          <MyImage />
        </div>

        <SocialLinks />

        <CopyText text={texts.header_copy_text[language]} />
      </div>
    </div>
  );
};
