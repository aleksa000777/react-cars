import React, { Component } from "react";
import "normalize.css";

import { List } from "../../components";
import "../../../styles/base/_main.sass"; // Global styles
import "../../../styles/base/_common.sass"; // Global styles
import styles from "./styles.sass"; // Css-module styles

class CarsListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
      visibleVehicles: [],
      current_page: 1,
      page_count: 0,
      filtered_count: 0,
      qualifying_count: 0
    };
  }

  componentDidMount() {
    const { current_page } = this.state;
    fetch(`${process.env.API_URL}?page=${current_page}`, {})
      .then(res => res.json())
      .then(({ data }) => {
        const { vehicles, page_count, filtered_count, qualifying_count } = data;
        this.setState({
          vehicles,
          visibleVehicles: vehicles,
          page_count,
          filtered_count,
          qualifying_count
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { visibleVehicles } = this.state;
    return (
      <div className={styles.carsListing}>
        <ul>
          {visibleVehicles.map(vehicle => (
            <List vehicle={vehicle} key={vehicle.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default CarsListing;
