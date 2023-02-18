import Payment from "./payment/Payment";

export default () => {
  const payment = new Payment();

  payment.pay(400);
};
