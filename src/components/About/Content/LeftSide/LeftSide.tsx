import React from "react";

interface ILeftSide {
  photo: string;
}

export const LeftSide: React.FC<ILeftSide> = ({ photo }) => {
  return (
    <div className="about__left">
      <img className="about__image" src={photo} alt="About me" />
    </div>
  );
};
