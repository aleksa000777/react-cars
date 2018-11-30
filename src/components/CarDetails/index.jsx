import React from "react";
import { moneyConvert } from "../../utils";
import styles from "./styles.sass";

// this is approximate values
const MONTHLY_RATE = 0.45; // 45% from monthly payment
const START_RATE = 0.6; // 60% from start fee

const CarDetails = ({ vehicle = {} }) => {
  const { make, model, mileage, modelYear, productFinancials = [] } = vehicle;

  const financials = productFinancials[0] ? productFinancials[0] : [];
  const monthlyPayment = moneyConvert(financials.monthly_payment_cents);
  const startFee = moneyConvert(financials.start_fee_cents);
  const monthlyPaymentLoan = moneyConvert(
    financials.monthly_payment_cents,
    MONTHLY_RATE
  );
  const startPaymentLoan = moneyConvert(financials.start_fee_cents, START_RATE);

  return (
    <section className={styles.details}>
      <div>
        <p className={styles.title}>
          {modelYear} {make}
        </p>
        <p className={styles.model}>{model}</p>
        <p className={styles.mileage}>{mileage} Mi.</p>
      </div>
      <div className={styles.paymentMontly}>
        <p>
          Monthly pymt.
          <span className={styles.orange}>{monthlyPayment}</span>
        </p>
        <p>
          Start pymt.
          <span>{startFee}</span>
        </p>
      </div>
      <p className={styles.lineAfter}>
        <span>3Yr Loan Alternative</span>
      </p>
      <div className={styles.paymentLoan}>
        <p>
          Monthly pymt.
          <span> {monthlyPaymentLoan}</span>{" "}
        </p>
        <p>
          Start pymt.
          <span> {startPaymentLoan} </span>
        </p>
      </div>
    </section>
  );
};

export default CarDetails;
