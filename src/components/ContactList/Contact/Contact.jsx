import { useDispatch } from "react-redux";
import styles from "./Contact.module.css";
import { deleteContact } from "../../../redux/components/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { name, number } = contact;
  return (
    <li className={styles.item}>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </li>
  );
};
export default Contact;
