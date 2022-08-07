import React, { useState, useEffect } from "react";

// Functions
import { closeModal } from "../utils/closeModal";
import { openModal } from "../utils/openModal";
// Functions

// Types
import { TWorkCardModal } from "../types/works";
// Types

// Context
import { LanguageProvider } from "../providers/LanguageContext";
// Context

// Components
import { Header } from "./Header/Header";
import { About } from "./About/About";
import { Modal } from "./Modal/Modal";
import { AboutBody } from "./Modal/Inner/AboutBody/AboutBody";
import WorkModalBody from "./WorkModalBody/WorkModalBody";
import Works from "./Works/Works";
import Skills from "./Skills/Skills";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import Experience from "./Experience/Experience";
import Menu from "./Menu/Menu";
// Components

export const App: React.FC = () => {
  const [aboutModalValue, setAboutModalValue] = useState<boolean>(false);
  const [aboutModalData, setAboutModalData] = useState({});
  const [isWorkModal, setIsWorkModal] = useState<boolean>(false);
  const [workCardData, setWorkCardData] = useState<TWorkCardModal>();

  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const abs = (data: any) => {
    setAboutModalValue(true);
    setAboutModalData(data);
  };

  useEffect(() => {
    const handleEscClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal(setAboutModalValue);
        closeModal(setIsWorkModal);
      }
    };
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      handleEscClose(e);
    });
    return () => {
      document.removeEventListener("keydown", (e: KeyboardEvent) => {
        handleEscClose(e);
      });
    };
  }, []);

  const handleSetWorkCardInfo = (workCardInfo: TWorkCardModal) => {
    setWorkCardData(workCardInfo);
  };

  const handleOpenBurgerMenu = () => {
    openModal(setIsMenuActive);
  };

  const handleCloseBurgerMenu = () => {
    closeModal(setIsMenuActive);
  };

  return (
    <LanguageProvider>
      <div className="wrapper">
        <Header handleOpenBurgerMenu={handleOpenBurgerMenu} />
        <About abs={abs} />
        <Works
          handleOpenWorkModal={setIsWorkModal}
          handleSetWorkCardInfo={handleSetWorkCardInfo}
        />
        <Experience />
        <Skills />
        <Contacts />
        <Footer />
        <Menu
          isMenuActive={isMenuActive}
          handleCloseBurgerMenu={handleCloseBurgerMenu}
        />
        <Modal active={aboutModalValue} setActive={setAboutModalValue}>
          <AboutBody active={aboutModalValue} data={aboutModalData} />
        </Modal>
        <Modal active={isWorkModal} setActive={setIsWorkModal}>
          <WorkModalBody workCardData={workCardData} />
        </Modal>
      </div>
    </LanguageProvider>
  );
};
