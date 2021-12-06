// Components
import SocialLinkCard from "../SocialLinkCard/SocialLinkCard";
import { Logo } from "../Logo/Logo";
// Components

// Social data
import social from "../../constants/socialLinks";
// Socila data

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Logo logoText="RD" />
      {social.map(({ name, socialLinks, id }) => {
        return (
          <div className="footer__box" key={id}>
            <p className="footer__name">{name}:</p>
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
      <p className="footer__text">Follow and Contact us :)</p>
    </footer>
  );
};

export default Footer;
