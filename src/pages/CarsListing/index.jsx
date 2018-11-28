import React, { Component } from "react";
import "normalize.css";
import InfiniteScroll from "react-infinite-scroller";
import uuidv1 from "uuid/v1"; // use this since we have duplicate data

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
      currentPage: 1,
      pageCount: 0
    };
  }

  componentDidMount() {
    const { currentPage } = this.state;
    window.history.replaceState({}, "", "/");
    this.fetchVechicles(currentPage);
  }

  fetchVechicles = page =>
    fetch(`${process.env.API_URL}?page=${page}`, {})
      .then(res => res.json())
      .then(({ data }) => {
        this.setState({
          vehicles: data.vehicles,
          visibleVehicles: data.vehicles,
          pageCount: data.page_count,
          currentPage: data.current_page
        });
      })
      .catch(error => console.error(error));

  loadItems = currentPage => {
    // no need for API call, data are the same
    window.history.replaceState({}, "", `?page=${currentPage}`);
    this.setState(prevState => ({
      currentPage,
      visibleVehicles: [...prevState.visibleVehicles, ...prevState.vehicles]
    }));
  };

  render() {
    const { visibleVehicles, currentPage, pageCount } = this.state;
    const hasMore = currentPage < pageCount;
    const loader = (
      <div className="loader" key={0}>
        Loading ...
      </div>
    );
    return (
      <div className={styles.carsListing}>
        <InfiniteScroll
          pageStart={1}
          loadMore={this.loadItems}
          hasMore={hasMore}
          loader={loader}
          useWindow={false}
        >
          <ul>
            {visibleVehicles.map(vehicle => (
              <List vehicle={vehicle} key={uuidv1()} />
            ))}
          </ul>
        </InfiniteScroll>
      </div>
    );
  }
}

export default CarsListing;
