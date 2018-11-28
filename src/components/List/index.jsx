import React from "react";
import { Link } from "react-router-dom";
import { moneyConvert } from "../../utils";

const List = ({ vehicle = {} }) => {
  const { id, make, mileage, model, trim } = vehicle;
  const modelYear = vehicle.model_year;
  const productFinancials = vehicle.product_financials;
  const chromeImageUrl = vehicle.chrome_image_url;

  const startFee = moneyConvert(productFinancials[0].start_fee_cents);
  const monthlyPayment = moneyConvert(
    productFinancials[0].monthly_payment_cents
  );

  return (
    <li>
      <Link to={`/car/${id}`}>
        <img src={chromeImageUrl} alt={model} />
      </Link>
      <div>
        <h4>
          {modelYear} {make} {model}
        </h4>
        <p>
          VIN:
          {id}
        </p>
        <p>
          Trim:
          {trim}
        </p>
        <p>
          Miles:
          {mileage}
        </p>
        <p>
          Start Fee:
          {startFee}
        </p>
        <p>
          Monthly Payment:
          {monthlyPayment}
        </p>
      </div>
    </li>
  );
};

export default List;
