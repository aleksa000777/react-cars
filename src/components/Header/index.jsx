import React from "react";
import { history } from "../../utils";
import styles from "./styles.sass"; // Css-module styles

const Header = () => {
  const goToSearch = () => history.push("/");
  return (
    <header>
      <ul>
        <li>
          <div className={styles.headerLink} onClick={goToSearch}>
            Fair
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
