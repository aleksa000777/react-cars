import React from "react";
import styles from "./styles.sass";

const Footer = () => (
  <footer className={styles.footer}>
    <p className={styles.title}>Contact us</p>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <span>Media Inquiries</span>
        <span>
          <a href="mailto:press@fair.com">press@fair.com</a>
        </span>
      </li>
      <li className={styles.listItem}>
        <span>Customer Support</span>
        <span>
          <a href="mailto:press@fair.com">support@fair.com</a>
        </span>
      </li>
      <li className={styles.listItem}>
        <span>Investors</span>
        <span>
          <a href="mailto:press@fair.com">invest@fair.com</a>
        </span>
      </li>
      <li className={styles.listItem}>
        <span>Concierge</span>
        <span>
          <a href="tel:833-387-6677">(833) 387-6677</a>
        </span>
      </li>
    </ul>
  </footer>
);

export default Footer;
