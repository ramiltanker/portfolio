import React from "react";
import { Decor } from "../Decor/Decor";
import { Content } from "./Content/Content";

type AboutPropsType = {
  abs: (data: any) => void;
};

export const About: React.FC<AboutPropsType> = ({ abs }) => {
  return (
    <section className="about" id="about">
      <Content abs={abs} />
      <Decor fill="#202020" />
      <div className="line" />
    </section>
  );
};
