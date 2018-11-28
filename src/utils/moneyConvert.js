const moneyConvert = cents =>
  (cents / 100).toLocaleString("en-US", { style: "currency", currency: "USD" });

export default moneyConvert;
