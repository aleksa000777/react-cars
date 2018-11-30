import React, { Component, Fragment } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { Subscribe } from "unstated";
import uuidv1 from "uuid/v1"; // use this since we have duplicate data
import { List, FilterFavorite, Loader } from "../../components";
import DataVehicles from "../../containers/DataVehicles";
import styles from "./styles.sass"; // Css-module styles
import loaderImg from "../../../styles/img/__loader.gif";

class CarsListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
      visibleVehicles: [],
      currentPage: 1,
      pageCount: 0,
      loading: true
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
      .then(({ data }) => {
        this.setState({
          vehicles: data.vehicles,
          visibleVehicles: data.vehicles,
          pageCount: data.page_count,
          currentPage: data.current_page,
          loading: false
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

  filterData = () => this.forceUpdate(); // Change state thrice / re-render once

  render() {
    const { visibleVehicles, currentPage, pageCount, loading } = this.state;
    const { data } = this.props;
    const { favorite, filtered } = data.state;
    const hasMore = currentPage < pageCount;
    const loader = (
      <div className="loader" key={0}>
        <img src={loaderImg} alt="loading" />
      </div>
    );
    const displayVehicles = filtered
      ? visibleVehicles.filter(vehicle => favorite[vehicle.id] === true)
      : visibleVehicles;
    return (
      <Fragment>
        {loading && <Loader className="overlay" />}
        {!loading && (
          <div className={styles.wrapper}>
            <FilterFavorite
              className="filterFavorite"
              copy="Only favorite"
              checked={filtered}
              onChange={e => {
                this.filterData();
                data.handleCheckbox(e);
              }}
            />
            <div className={styles.carsListing}>
              <InfiniteScroll
                pageStart={1}
                loadMore={this.loadItems}
                hasMore={hasMore}
                loader={loader}
                useWindow={false}
              >
                <ul>
                  {displayVehicles.map(vehicle => (
                    <List
                      vehicle={vehicle}
                      key={uuidv1()}
                      data={data}
                      filterData={this.filterData}
                    />
                  ))}
                </ul>
              </InfiniteScroll>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export { CarsListing };
export default args => (
  <Subscribe to={[DataVehicles]}>
    {data => <CarsListing data={data} {...args} />}
  </Subscribe>
);
