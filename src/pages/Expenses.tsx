import React, { FC } from "react";
import { IDayStransactionList } from "../types/transactions.type";
import DayTransactionList from "../components/DayTransactionList/DayTransactionList";

const dayTransactionList: IDayStransactionList = {
  date: new Date(),
  transactionList: [
    {
      id: 1,
      tag: "Food",
      payMethod: "Creadit card",
      comment: "Some comment",
      amount: "438 RUB",
    },
    {
      id: 2,
      tag: "Housing",
      payMethod: "Debit card",
      comment: "Another comment",
      amount: "6540 RUB",
    },
  ],
};

const Expenses: FC = () => {
  return (
    <div>
      <p>Expenses page</p>
      <DayTransactionList dayTransactionList={dayTransactionList} />
    </div>
  );
};

export default Expenses;
