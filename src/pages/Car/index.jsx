import React, { Component } from "react";
import { Subscribe } from "unstated";
import {
  Failure,
  FilterFavorite,
  CarDetails,
  Carousel
} from "../../components";
import DataVehicles from "../../containers/DataVehicles";
import { formatData } from "../../utils";
import styles from "./styles.sass";

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicle: {},
      error: false,
      loading: true,
      index: 1
    };
  }

  componentDidMount() {
    const { location } = this.props;
    const vin = location.pathname.split("/").pop();
    // mock localStorage, since API doesn't support ETags
    const vehicle = localStorage.getItem(vin);
    if (vehicle) {
      this.setState({ vehicle: JSON.parse(vehicle), loading: false });
    } else {
      this.fetchVehicles(vin);
    }
  }

  fetchVehicles = vin =>
    fetch(`${process.env.API_URL}/${vin}`, {})
      .then(res => res.json())
      .then(({ data: { vehicle } }) => {
        // format keys to camelCase
        const formatedData = formatData(vehicle);
        // store data in localStarage
        localStorage.setItem(vin, JSON.stringify(formatedData));
        this.setState({ vehicle: formatedData, loading: false });
      })
      .catch(() => {
        this.setState({ error: true, loading: false });
      });

  updateIndex = index => {
    this.setState({ index });
  };

  render() {
    const { vehicle, loading, error, index } = this.state;
    const { id, make, model, imageLocationList } = vehicle;
    const { data } = this.props;
    const checked =
      data.state.favorite[id] === undefined ? false : data.state.favorite[id];

    return (
      <React.Fragment>
        {!loading && error && <Failure />}
        {!loading && !error && (
          <section className={styles.carPage}>
            <FilterFavorite
              className="carDetails"
              checked={checked}
              onChange={e => data.handleCheckbox(e, id)}
            />
            <Carousel
              imageLocationList={imageLocationList}
              make={make}
              model={model}
              updateIndex={this.updateIndex}
            />
            <p>
              {index} / {imageLocationList.length}
            </p>
            <CarDetails vehicle={vehicle} />
          </section>
        )}
      </React.Fragment>
    );
  }
}

export { Car };
export default args => (
  <Subscribe to={[DataVehicles]}>
    {data => <Car data={data} {...args} />}
  </Subscribe>
);
