import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const instagramIcon = <BsInstagram className="footer__icon" />;
const telegramIcon = <FaTelegramPlane className="footer__icon" />;
const whatsAppIcon = <FaWhatsapp className="footer__icon" />;

const social = [
  {
    id: 0,
    name: "Ramil",
    socialLinks: [
      {
        id: 0,
        socialLink: "https://www.instagram.com/ashrafulin_/?hl=ru",
        icon: instagramIcon,
      },
      {
        id: 1,
        socialLink: "https://t.me/ramil_ashrafulin",
        icon: telegramIcon,
      },
      {
        id: 2,
        socialLink: "https://api.whatsapp.com/send?phone=79775329220&text=",
        icon: whatsAppIcon,
      },
    ],
  },
];

export default social;
