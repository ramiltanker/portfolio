import React, { useContext } from "react";
import texts from "../../../../../../constants/texts";
import { LanguageContext } from "../../../../../../providers/LanguageContext";

interface IList {
  name: string;
  age: string;
  phone: string;
  email: string;
}

export const List: React.FC<IList> = ({ name, age, phone, email }) => {
  const { language } = useContext(LanguageContext);

  return (
    <ul className="about__list">
      <li className="about__item">
        <label className="about__label">
          {texts.about_list_name[language]}:
        </label>
        <span className="about__value">{name}</span>
      </li>
      <li className="about__item">
        <label className="about__label">
          {texts.about_list_age[language]}:
        </label>
        <span className="about__value">{age}</span>
      </li>
      <li className="about__item">
        <label className="about__label">
          {texts.about_list_phone[language]}:
        </label>
        <span className="about__value">{phone}</span>
      </li>
      <li className="about__item">
        <label className="about__label">Email:</label>
        <span className="about__value">{email}</span>
      </li>
    </ul>
  );
};
