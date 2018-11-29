import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroller";
import uuidv1 from "uuid/v1"; // use this since we have duplicate data
import { Subscribe } from "unstated";
import "normalize.css";

import { List, FilterFavorite } from "../../components";
import DataVehicles from "../../containers/DataVehicles";
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
    // reset search param
    window.history.replaceState({}, "", "/");
    this.fetchVechicles(currentPage);
  }

  fetchVechicles = page =>
    fetch(`${process.env.API_URL}?page=${page}`, {})
      .then(res => res.json())
      .then(({ data: { vehicles } }) => {
        this.setState({
          vehicles,
          visibleVehicles: vehicles,
          pageCount: vehicles.page_count,
          currentPage: vehicles.current_page
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

  filterData = () => {
    this.forceUpdate(); // Change state thrice / re-render once
  };

  render() {
    const { visibleVehicles, currentPage, pageCount } = this.state;
    const { data } = this.props;
    const { favorite, filtered } = data.state;
    const hasMore = currentPage < pageCount;
    const loader = (
      <div className="loader" key={0}>
        Loading ...
      </div>
    );
    const displayVehicles = filtered
      ? visibleVehicles.filter(vehicle => favorite[vehicle.id] === true)
      : visibleVehicles;

    return (
      <div className={styles.carsListing}>
        <FilterFavorite
          checked={filtered}
          onChange={e => {
            this.filterData();
            data.handleCheckbox(e);
          }}
        />
        <InfiniteScroll
          pageStart={1}
          loadMore={this.loadItems}
          hasMore={hasMore}
          loader={loader}
          useWindow={false}
        >
          <ul>
            {displayVehicles.map(vehicle => (
              <List vehicle={vehicle} key={uuidv1()} data={data} />
            ))}
          </ul>
        </InfiniteScroll>
      </div>
    );
  }
}

export { CarsListing };
export default args => (
  <Subscribe to={[DataVehicles]}>
    {data => <CarsListing data={data} {...args} />}
  </Subscribe>
);
