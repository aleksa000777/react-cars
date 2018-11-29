import React from "react";
import styles from "./styles.sass"; // Css-module styles

const FilterFavorite = ({ checked, onChange, copy, className }) => (
  <form className={styles[className]}>
    <label className={styles.container}>
      {copy}{" "}
      <input
        name="fav"
        type="checkbox"
        defaultChecked={checked}
        onChange={onChange}
      />
      <span className={styles.checkmark} />
    </label>
  </form>
);

export default FilterFavorite;
