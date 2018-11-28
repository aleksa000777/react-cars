import React from "react";
import { moneyConvert } from "../../utils";

const List = ({ vehicle = {} }) => {
  const {
    id,
    chrome_image_url,
    make,
    mileage,
    model,
    model_year,
    product_financials,
    trim
  } = vehicle;

  const start_fee = moneyConvert(product_financials[0].start_fee_cents);
  const monthly_payment = moneyConvert(
    product_financials[0].monthly_payment_cents
  );

  return (
    <section>
      <img src={chrome_image_url} alt={model} />
      <div>
        <h4>
          {model_year} {make} {model}
        </h4>
        <p>VIN: {id}</p>
        <p>Trim: {trim}</p>
        <p>Miles: {mileage}</p>
        <p>Start Fee: {start_fee}</p>
        <p>Monthly Payment: {monthly_payment}</p>
      </div>
    </section>
  );
};

export default List;
