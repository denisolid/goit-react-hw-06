import { useSelector } from "react-redux";
import {
  selectContacts,
  selectNameFilter,
} from "../../redux/components/selectors";
import Contact from ".//Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  // const filteredData = contacts.filter((item) =>
  //   item.name.toLowerCase().includes(filter.toLowerCase())
  // );
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
