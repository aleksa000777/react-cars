import React from "react";
import { history } from "../../utils";
import styles from "./styles.sass";

const Failure = () => {
  const goToSearch = () => history.push("/");

  return (
    <section className={styles.failureWrapper}>
      <div id="failure" className={styles.failure}>
        <p className={styles.header}>Looks like you went off the road.</p>
        <p className={styles.subHeader}>Page not found. Let’s take you home.</p>
        <button type="submit" className="button" onClick={goToSearch}>
          Try again
        </button>
      </div>
    </section>
  );
};

export default Failure;
