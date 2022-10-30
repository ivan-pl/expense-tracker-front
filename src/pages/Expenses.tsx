import Transaction from "../components/Transaction";

const transaction = {
  tag: "Food",
  payMethod: "Creadit card",
  comment: "Some comment",
  amount: "438 RUB",
};

export default function Expenses() {
  return (
    <div>
      <p>Expenses page</p>
      <Transaction transaction-info={transaction} />
    </div>
  );
}
