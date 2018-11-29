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

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicle: {},
      error: false,
      loading: true
    };
  }

  componentDidMount() {
    const { location } = this.props;
    const vin = location.pathname.split("/").pop();
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

  render() {
    const { vehicle, loading, error } = this.state;
    const { id, make, model, imageLocationList } = vehicle;
    const { data } = this.props;
    const checked =
      data.state.favorite[id] === undefined ? false : data.state.favorite[id];

    return (
      <React.Fragment>
        {!loading && error && <Failure />}
        {!loading && !error && (
          <section>
            <FilterFavorite
              checked={checked}
              onChange={e => data.handleCheckbox(e, id)}
            />
            <Carousel
              imageLocationList={imageLocationList}
              make={make}
              model={model}
            />
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
