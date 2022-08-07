// Components
import ContactCard from "../ContactCard/ContactCard";
// Components

// Contacts Data
import contacts from "../../constants/contacts";
import { Decor } from "../Decor/Decor";
// Contacts Data

import { LanguageContext } from "../../providers/LanguageContext";
import { useContext } from "react";

const Contacts = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className="contacts" id="contacts">
      <div className="contacts__container">
        {contacts.map(({ textName, title, icon, id }) => {
          return (
            <ContactCard
              textName={textName[language]}
              title={title[language]}
              icon={icon}
              key={id}
            />
          );
        })}
      </div>
      <Decor fill="#202020" />
    </section>
  );
};

export default Contacts;
