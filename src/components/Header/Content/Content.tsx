import React from "react";

import { CopyText } from "./Inner/CopyText";
import { MyImage } from "./Inner/MyImage";
import { Information } from "./Inner/Information/Information";
import { SocialLinks } from "./Inner/SocialLinks/SocialLinks";

export const Content: React.FC = () => {
  return (
    <div className="header__content">
      <div className="container">
        <div className="header__wrap">
          <Information />
          <MyImage />
        </div>

        <SocialLinks />

        <CopyText text="Nice person and great developer" />
      </div>
    </div>
  );
};
