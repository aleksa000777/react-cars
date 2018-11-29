import React from "react";
import { moneyConvert } from "../../utils";

// this is approximate values
const MONTHLY_RATE = 0.45; // 45% from monthly payment
const START_RATE = 0.6; // 60% from start fee

const CarDetails = ({ vehicle = {} }) => {
  const { make, model, meleage, modelYear, productFinancials = [] } = vehicle;

  const financials = productFinancials[0] ? productFinancials[0] : [];
  const monthlyPayment = moneyConvert(financials.monthly_payment_cents);
  const startFee = moneyConvert(financials.start_fee_cents);
  const monthlyPaymentLoan = moneyConvert(
    financials.monthly_payment_cents,
    MONTHLY_RATE
  );
  const startPaymentLoan = moneyConvert(financials.start_fee_cents, START_RATE);

  return (
    <section>
      <p>
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
  );
};

export default CarDetails;
