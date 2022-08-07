import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import { LeftSide } from "./LeftSide/LeftSide";
import { RightSide } from "./RightSide/RightSide";

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
  return (
    <>
      {aboutInfo.map(({ id, name, age, phone, email, text, photo }) => {
        return (
          <div className="about__inner" key={id}>
            <LeftSide photo={photo} />
            <RightSide
              name={name}
              age={age}
              phone={phone}
              email={email}
              text={text}
              abs={() => abs({ name, age, phone, email })}
            />
          </div>
        );
      })}
    </>
  );
};
