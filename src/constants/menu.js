import header from "../assets/images/header.png";
import about from "../assets/images/about.png";
import works from "../assets/images/works.png";
import experience from "../assets/images/experience.png";
import skills from "../assets/images/skills.png";
import contacts from "../assets/images/contacts.png";

const menu = [
  {
    id: 0,
    img: header,
    title: { en: "HOME", ru: "ГЛАВНАЯ" },
    to: "home",
  },
  {
    id: 1,
    img: about,
    title: { en: "ABOUT", ru: "ПРО МЕНЯ" },
    to: "about",
  },
  {
    id: 2,
    img: works,
    title: { en: "PROJECTS", ru: "ПРОЕКТЫ" },
    to: "projects",
  },
  {
    id: 3,
    img: experience,
    title: { en: "EXPERIENCE", ru: "ОПЫТ" },
    to: "experience",
  },
  {
    id: 4,
    img: skills,
    title: { en: "SKILLS", ru: "НАВЫКИ" },
    to: "skills",
  },
  {
    id: 5,
    img: contacts,
    title: { en: "CONTACTS", ru: "КОНТАКТЫ" },
    to: "contacts",
  },
];

export default menu;
