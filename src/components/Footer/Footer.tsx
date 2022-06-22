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
      <p className="footer__text">Follow and Contact me :)</p>
      <p className="footer__text footer__message">
        Meta признана экстремисткой корпорацией на <br></br>территории
        России/Meta is recognized as an <br></br>extremist corporation in Russia
      </p>
    </footer>
  );
};

export default Footer;
