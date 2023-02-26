import React, { useContext } from "react";
import texts from "../../../../constants/texts";
import { Skill } from "../../../Skill/Skill";
import { LanguageContext } from "../../../../providers/LanguageContext";

interface IAboutBody {
  active: boolean;
  data: any;
}

export const AboutBody: React.FC<IAboutBody> = ({ active, data }) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="about-modal">
      <h2 className="about-modal__title">
        {texts.about_modal_title[language]}
      </h2>

      <div className="about-modal__skills">
        <Skill procent="90%" name="HTML/CSS" color="yellow" active={active} />
        <Skill procent="85%" name="JavaScript" color="blue" active={active} />
        <Skill procent="85%" name="React/Redux" color="red" active={active} />
        <Skill procent="85%" name="TypeScript" color="green" active={active} />
      </div>

      {/* <List name={data.name} age={data.age} phone={data.phone} email={data.email}/> */}
    </div>
  );
};
