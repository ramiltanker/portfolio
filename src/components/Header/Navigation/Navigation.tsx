import React from "react";
import { Logo } from "../../Logo/Logo";

// Components
import BurgerMenu from "../../BurgerMenu/BurgerMenu";
// Components

interface INavigation {
  handleOpenBurgerMenu: () => void;
}

export const Navigation: React.FC<INavigation> = ({ handleOpenBurgerMenu }) => {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <Logo logoText="R" />
        <BurgerMenu handleOpenBurgerMenu={handleOpenBurgerMenu} />
      </div>
    </nav>
  );
};
