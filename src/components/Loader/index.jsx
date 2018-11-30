import React from "react";
import styles from "./styles.sass";
import loader from "../../../styles/img/__loader.gif";

const Loader = () => (
  <section className={styles.loader} key={0}>
    <img src={loader} alt="loader" />
  </section>
);

export default Loader;
