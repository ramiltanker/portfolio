import { GrLocation } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const AddressIcon = <GrLocation className="contacts__image" />;
const EmailIcon = <MdOutlineMail className="contacts__image" />;
const PhoneIcon = <FiPhoneCall className="contacts__image" />;

const contacts = [
  {
    id: 0,
    textName: "Russia, Moscow",
    title: "Address",
    icon: AddressIcon,
  },
  {
    id: 1,
    textName: "ramilashrafulinfrontend@gmail.com",
    title: "Email",
    icon: EmailIcon,
  },
  {
    id: 2,
    textName: "Contact me in social media to get my phone number",
    title: "Phone",
    icon: PhoneIcon,
  },
];

export default contacts;
