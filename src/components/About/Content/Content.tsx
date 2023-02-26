import React, { useContext } from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import { LeftSide } from "./LeftSide/LeftSide";
import { RightSide } from "./RightSide/RightSide";

import { LanguageContext } from "../../../providers/LanguageContext";

// Info about us
import aboutInfo from "../../../constants/about-us-info";
// Info about us

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

type ContentPropsType = {
  abs: (data: any) => void;
};

export const Content: React.FC<ContentPropsType> = ({ abs }) => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      {aboutInfo.map(({ id, name, age, phone, email, text, photo }) => {
        return (
          <div className="about__inner" key={id}>
            <LeftSide photo={photo} />
            <RightSide
              name={name[language]}
              age={age[language]}
              phone={phone[language]}
              email={email}
              text={text[language]}
              abs={() => abs({ name, age, phone, email })}
            />
          </div>
        );
      })}
    </>
  );
};
