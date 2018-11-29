const moneyConvert = (cents, rate = 0) =>
  ((cents + cents * rate) / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });

export default moneyConvert;
