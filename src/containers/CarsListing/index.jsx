import React, { Component } from "react";
import "normalize.css";

import "../../../styles/base/_main.sass"; // Global styles
import "../../../styles/base/_common.sass"; // Global styles
import styles from "./styles.sass"; // Css-module styles

class CarsListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueCars: [],
      visibleCars: [],
      page: 1
    };
  }

  componentDidMount() {
    console.log("did mount");
  }

  render() {
    console.log("render", this.props);
    return (
      <div className={styles.carsListing}>
        <h1>Car listing</h1>
      </div>
    );
  }
}

export default CarsListing;
