import React, { Component } from "react";
import Slider from "react-slick";
import { Subscribe } from "unstated";
import styles from "./styles.sass";
import { Failure, Favorite } from "../../components";
import DataVehicles from "../../containers/DataVehicles";
import { moneyConvert, paymentLoan } from "../../utils";
import defaultCar from "../../images/defaultCar.png";

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      make: "",
      model: "",
      meleage: 0,
      modelYear: 0,
      images: [],
      financials: [],
      error: false,
      loading: true,
      id: ""
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
      .then(({ data }) => {
        const { vehicle } = data;
        this.setState({
          make: vehicle.make,
          model: vehicle.model,
          meleage: vehicle.meleage,
          modelYear: vehicle.model_year,
          images: vehicle.image_location_list,
          financials: vehicle.product_financials[0],
          loading: false,
          id: vehicle.id
        });
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

    const {
      make,
      model,
      meleage,
      modelYear,
      images,
      financials,
      error,
      loading,
      id
    } = this.state;
    const { data } = this.props;
    const monthlyPayment = moneyConvert(financials.monthly_payment_cents);
    const startFee = moneyConvert(financials.start_fee_cents);
    const loanPayment = paymentLoan(
      financials.monthly_payment_cents,
      financials.start_fee_cents
    );
    const { monthlyPaymentLoan, startPaymentLoan } = loanPayment;

    return (
      <React.Fragment>
        {!loading && error && <Failure />}
        {!loading && !error && (
          <section>
            <Favorite vin={id} data={data} />
            <Slider {...settings}>
              {images.map(url => (
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
