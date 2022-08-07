import React, { useContext } from "react";
// Components
import SocialLinkCard from "../SocialLinkCard/SocialLinkCard";
import { Logo } from "../Logo/Logo";
// Components

import texts from "../../constants/texts";
import { LanguageContext } from "../../providers/LanguageContext";

// Social data
import social from "../../constants/socialLinks";
// Socila data

const Footer = () => {
  const { language } = useContext(LanguageContext);

  return (
    <footer className="footer" id="footer">
      <Logo logoText="R" />
      <div className="footer__wrap">
        {social.map(({ name, socialLinks, id }) => {
          return (
            <div className="footer__box" key={id}>
              <ul className="footer__list">
                {socialLinks.map(({ socialLink, icon, id }) => {
                  return (
                    <SocialLinkCard
                      socialLink={socialLink}
                      icon={icon}
                      key={id}
                    />
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <p className="footer__text">{texts.footer_follow_contact[language]} :)</p>
      <p className="footer__text footer__message">
        {texts.footer_meta[language]}
      </p>
    </footer>
  );
};

export default Footer;
