import React, { useContext } from "react";
import { List } from "./Inner/List/List";
import { Text } from "./Inner/Text";
import { Button } from "../../../Button/Button";
import { Title } from "../../../Title/Title";
import texts from "../../../../constants/texts";
import { LanguageContext } from "../../../../providers/LanguageContext";

type RightSidePropsType = {
  abs: () => void;
  name: string;
  age: string;
  phone: string;
  email: string;
  text: string;
};

export const RightSide: React.FC<RightSidePropsType> = ({
  name,
  age,
  phone,
  email,
  text,
  abs,
}) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="about__right">
      <Title text={texts.about_title[language]} />
      <div className="about__box">
        <Text content={text} />
      </div>
      <List name={name} age={age} phone={phone} email={email} />
      <Button text={texts.about_more[language]} abs={abs} />
    </div>
  );
};
