import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import NubankRewards from "./NubankRewards";

export default () => {
  const creditCard = new CreditCard();
  const debitCard = new DebitCard();
  const rewards = new NubankRewards();

  creditCard.validate();
  creditCard.collectPayment();

  console.log("-----------");

  debitCard.validate();
  debitCard.collectPayment();

  console.log("-----------");

  rewards.validate();
  rewards.collectPayment();
};
