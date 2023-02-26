import { GrLocation } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const AddressIcon = <GrLocation className="contacts__image" />;
const EmailIcon = <MdOutlineMail className="contacts__image" />;
const PhoneIcon = <FiPhoneCall className="contacts__image" />;

const contacts = [
  {
    id: 0,
    textName: {
      ru: "Россия, Москва",
      en: "Russia, Moscow",
    },
    title: {
      ru: "Адрес",
      en: "Address",
    },
    icon: AddressIcon,
  },
  {
    id: 1,
    textName: {
      ru: "ramil-frontend@mail.ru",
      en: "ramil-frontend@mail.ru",
    },
    title: { en: "Email", ru: "Email" },
    icon: EmailIcon,
  },
  {
    id: 2,
    textName: {
      ru: "Свяжитесь со мной в социальных сетях, чтобы получить мой номер телефона",
      en: "Contact me in social media to get my phone number",
    },
    title: {
      ru: "Телефон",
      en: "Phone",
    },
    icon: PhoneIcon,
  },
];

export default contacts;
