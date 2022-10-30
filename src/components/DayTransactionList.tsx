import IDayStransactionList from "../types/daytransactionlist";
import Transaction from "./Transaction";
import "./DayTransactionList.scss";

interface IProps {
  dayTransactionList: IDayStransactionList;
}

function DayTransactionList(props: IProps) {
  const date = props.dayTransactionList.date;
  const transactions = props.dayTransactionList.transactionList.map(
    (transaction) => (
      <Transaction key={transaction.id.toString()} transaction={transaction} />
    )
  );
  return (
    <div className="day-transactions">
      <time className="time" dateTime={date.toISOString().substring(0, 10)}>
        {date.toDateString()}
      </time>
      <div className="transaction-list">{transactions}</div>
    </div>
  );
}

export default DayTransactionList;
