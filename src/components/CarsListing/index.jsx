import React from "react";
import "normalize.css";

import "../../../styles/base/_main.sass"; // Global styles
import "../../../styles/base/_common.sass"; // Global styles
import styles from "./styles.sass"; // Css-module styles

const CarsListing = () => (
  <div className={styles.carsListing}>
    <h1>Car listing</h1>
  </div>
);

export default CarsListing;
