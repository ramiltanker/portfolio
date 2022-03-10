// Components
import ContactCard from "../ContactCard/ContactCard";
// Components

// Contacts Data
import contacts from "../../constants/contacts";
import { Decor } from "../Decor/Decor";
// Contacts Data

const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts__container">
        {contacts.map(({ textName, title, icon, id }) => {
          return (
            <ContactCard
              textName={textName}
              title={title}
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
