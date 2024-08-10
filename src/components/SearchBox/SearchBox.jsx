// src/components/SearchBox/SearchBox.jsx

import { useDispatch } from "react-redux";
import styles from "./SearchBox.module.css";
import { changeFilter } from "../../redux/components/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Find contact by name:</p>
      <input
        className={styles.input}
        type="text"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default SearchBox;
