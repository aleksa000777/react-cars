import React, { Component } from "react";
import Slider from "react-slick";
import { Subscribe } from "unstated";
import styles from "./styles.sass";
import { Failure, FilterFavorite } from "../../components";
import DataVehicles from "../../containers/DataVehicles";
import { moneyConvert, paymentLoan, formatData } from "../../utils";
import defaultCar from "../../images/defaultCar.png";

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
    this.fetchVechicles(vin);
  }

  fetchVechicles = vin =>
    fetch(`${process.env.API_URL}/${vin}`, {})
      .then(res => res.json())
      .then(({ data: { vehicle } }) => {
        // format keys to camelCase
        const formatedData = formatData(vehicle);
        this.setState({ vehicle: formatedData, loading: false });
      })
      .catch(() => {
        this.setState({ error: true, loading: false });
      });

  getImgKey = url => {
    const arr = url.split(".");
    return arr[arr.length - 2];
  };

  addDefaultSrc = ev => {
    const img = ev;
    img.target.src = defaultCar;
  };

  render() {
    // carousel settings
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };

    const { vehicle, loading, error } = this.state;
    const {
      id,
      make,
      model,
      meleage,
      modelYear,
      imageLocationList,
      productFinancials = []
    } = vehicle;

    const financials = productFinancials[0] ? productFinancials[0] : [];
    const monthlyPayment = moneyConvert(financials.monthly_payment_cents);
    const startFee = moneyConvert(financials.start_fee_cents);
    const loanPayment = paymentLoan(
      financials.monthly_payment_cents,
      financials.start_fee_cents
    );
    const { monthlyPaymentLoan, startPaymentLoan } = loanPayment;

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
            <Slider {...settings}>
              {imageLocationList.map(url => (
                <div
                  className="selectImage"
                  key={this.getImgKey(url)}
                  role="menuitem"
                  tabIndex={0}
                >
                  <img
                    onError={this.addDefaultSrc}
                    alt={`${make} ${model}`}
                    src={url}
                  />
                </div>
              ))}
            </Slider>
            <section>
              <p className={styles.car}>
                {modelYear} {make}
              </p>
              <p>{model}</p>
              <p>{meleage}</p>
              <p>Monthly pymt.</p>
              <p>{monthlyPayment}</p>
              <p>Start pymt.</p>
              <p>{startFee}</p>
              <p>3Yr Loan Alternative</p>
              <p>Monthly pymt.</p>
              <p>{monthlyPaymentLoan}</p>
              <p>Start pymt.</p>
              <p>{startPaymentLoan}</p>
            </section>
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
