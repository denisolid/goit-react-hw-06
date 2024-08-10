import { useSelector } from "react-redux";
import {
  selectContacts,
  selectNameFilter,
} from "../../redux/components/selectors";
import Contact from ".//Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter) || "";
  const normalizedFilter =
    typeof filter === "string" ? filter.toLowerCase() : ""; // Ensure filter is a string

  const filteredData = contacts.filter(
    (item) => item.name.toLowerCase().includes(normalizedFilter) // Apply filtering
  );
  return (
    <ul className={styles.list}>
      {filteredData.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
