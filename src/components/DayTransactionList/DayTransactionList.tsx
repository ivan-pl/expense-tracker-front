import React, { FC } from "react";

import { DayTransactions } from "../../types/transactions.type";
import Transaction from "../Transaction/Transaction";
import "./DayTransactionList.scss";

interface Props {
  dayTransactionList: DayTransactions;
}

const DayTransactionList: FC<Props> = ({ dayTransactionList }: Props) => {
  const date = dayTransactionList.date;
  const transactions = dayTransactionList.transactionList.map((transaction) => (
    <Transaction key={transaction.id} transaction={transaction} date={date} />
  ));
  return (
    <div className="day-transactions">
      <time className="time" dateTime={date}>
        {new Date(date).toDateString()}
      </time>
      <div className="transaction-list">{transactions}</div>
    </div>
  );
};

export default DayTransactionList;
