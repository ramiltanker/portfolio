import React from "react";
import { Navigation } from "./Navigation/Navigation";
import { Content } from "./Content/Content";
import { Decor } from "../Decor/Decor";

interface IHeader {
  handleOpenBurgerMenu: () => void;
}

export const Header: React.FC<IHeader> = ({ handleOpenBurgerMenu }) => {
  return (
    <header className="header" id="home">
      <Navigation handleOpenBurgerMenu={handleOpenBurgerMenu} />
      <Content />
      <Decor fill="#2a2a2a" />
    </header>
  );
};
