// this is approximate values
const MONTHLY_RATE = 0.45; // 45% from monthly payment
const START_RATE = 0.6; // 60% from start fee

const paymentLoan = (monthly = 0, startFee = 0) => {
  const monthlyPaymentLoan = (
    (monthly + monthly * MONTHLY_RATE) /
    100
  ).toLocaleString("en-US", { style: "currency", currency: "USD" });
  const startPaymentLoan = (
    (startFee + startFee * START_RATE) /
    100
  ).toLocaleString("en-US", { style: "currency", currency: "USD" });
  return { monthlyPaymentLoan, startPaymentLoan };
};

export default paymentLoan;
