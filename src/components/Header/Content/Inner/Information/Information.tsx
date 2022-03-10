import React from "react";
import { Subtitle } from "./Inner/Subtitle";
import { Title } from "./Inner/Title";
import { ArrowDown } from "./Inner/ArrowDown";
import { Button } from "../../../../Button/Button";

export const Information: React.FC = () => {
  return (
    <div className="header__box">
      <Subtitle text="Hello and Welcome" />

      <Title text="I am" />

      <Button text="Contact me" />

      <ArrowDown />
    </div>
  );
};
