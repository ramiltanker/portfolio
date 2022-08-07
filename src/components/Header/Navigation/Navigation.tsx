import React, { useContext } from "react";
import { Logo } from "../../Logo/Logo";

// Components
import BurgerMenu from "../../BurgerMenu/BurgerMenu";
// Components

import { LanguageContext } from "../../../providers/LanguageContext";

interface INavigation {
  handleOpenBurgerMenu: () => void;
}

export const Navigation: React.FC<INavigation> = ({ handleOpenBurgerMenu }) => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <nav className="nav">
      <div className="nav__inner">
        <Logo logoText="R" />
        <div className="nav__buttons">
          <button
            className={`nav__language-button ${
              language === "ru" ? "nav__language-button-active" : ""
            }`}
            onClick={() => setLanguage("ru")}
          >
            Ru
          </button>
          <button
            className={`nav__language-button ${
              language === "en" ? "nav__language-button-active" : ""
            }`}
            onClick={() => setLanguage("en")}
          >
            En
          </button>
        </div>
        <BurgerMenu handleOpenBurgerMenu={handleOpenBurgerMenu} />
      </div>
    </nav>
  );
};
