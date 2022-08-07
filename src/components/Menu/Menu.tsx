import React, { useContext } from "react";

// Icons
import { RiCloseCircleFill } from "react-icons/ri";
// Icons

// Components
import MenuCard from "../MenuCard/MenuCard";
// Components

import { LanguageContext } from "../../providers/LanguageContext";

// Menu Data
import menu from "../../constants/menu";
// Menu Data

interface IMenu {
  isMenuActive: boolean;
  handleCloseBurgerMenu: () => void;
}

const Menu: React.FC<IMenu> = ({ isMenuActive, handleCloseBurgerMenu }) => {
  const { language } = useContext(LanguageContext);

  return (
    <section className={`${isMenuActive ? "menu__active" : ""} menu`}>
      <button className="menu__close-button" onClick={handleCloseBurgerMenu}>
        <RiCloseCircleFill className="menu__close-icon" />
      </button>
      <div className="menu__wrapper">
        {menu.map(({ img, title, id, to }) => {
          return (
            <MenuCard key={id} img={img} title={title[language]} to={to} />
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
