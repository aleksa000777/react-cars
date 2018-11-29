import React from "react";
import styles from "./styles.sass"; // Css-module styles

const Header = () => (
  <header>
    <ul>
      <li>
        <a className={styles.headerLink} href="/">
          Fair
        </a>
      </li>
    </ul>
  </header>
);

export default Header;
