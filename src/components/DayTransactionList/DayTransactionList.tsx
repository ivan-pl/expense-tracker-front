import React, { FC } from "react";
import { DayTransactions } from "../../types/transactions.type";
import Transaction from "../Transaction/Transaction";
import "./DayTransactionList.scss";

interface Props {
  dayTransactionList: DayTransactions;
}

const DayTransactionList: FC<Props> = (props: Props) => {
  const date = props.dayTransactionList.date;
  const transactions = props.dayTransactionList.transactionList.map(
    (transaction) => (
      <Transaction key={transaction.id.toString()} transaction={transaction} />
    )
  );
  return (
    <div className="day-transactions">
      <time className="time" dateTime={date.substring(0, 10)}>
        {new Date(date).toDateString()}
      </time>
      <div className="transaction-list">{transactions}</div>
    </div>
  );
};

export default DayTransactionList;
