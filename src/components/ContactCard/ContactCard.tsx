import React from "react";

interface IContactCard {
  textName: string;
  title: string;
  icon: JSX.Element;
}

const ContactCard: React.FC<IContactCard> = ({ textName, title, icon }) => {
  return (
    <div className="contacts__card">
      <div className="contacts__image-box">{icon}</div>
      <p className="contacts__title">{title}</p>
      <div className="contacts__box">
        <p className="contacts__text">{textName}</p>
      </div>
    </div>
  );
};

export default ContactCard;
