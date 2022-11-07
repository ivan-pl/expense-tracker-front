import React, { FC, DetailedHTMLProps, HTMLAttributes } from "react";

import { ITransactionSection } from "../types/transactions.type";
import TransactionSection from "../components/TransactionSection/TransactionSection";
import "../styles/Expenses.scss";

const transactionSection: ITransactionSection = {
  total: { day: 12450, week: 23540, month: 124980 },
  transactionHistory: [
    {
      date: new Date(2022, 11, 7),
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
    },
    {
      date: new Date(2022, 11, 5),
      transactionList: [
        {
          id: 1,
          tag: "Clothing",
          payMethod: "Creadit card",
          comment: "Some comment",
          amount: "865 RUB",
        },
        {
          id: 2,
          tag: "Transportation",
          payMethod: "Debit card",
          comment: "Another comment",
          amount: "4320 RUB",
        },
      ],
    },
  ],
};

const Expenses: FC = () => {
  const total = transactionSection.total;
  const transactionHistory = transactionSection.transactionHistory;
  return (
    <div className="expenses">
      <Total total={total} className="expenses__total" />
      <TransactionSection
        transactionHistory={transactionHistory}
        className="expenses__transactions"
      />
    </div>
  );
};

interface TTotalProps
  extends Pick<ITransactionSection, "total">,
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Total: FC<TTotalProps> = ({
  total: { day, week, month },
  className,
}: TTotalProps) => {
  return (
    <section className={"total " + className}>
      <h2 className="total__header">Total</h2>
      <div className="total-wrap">
        <div className="row">
          <div>Per day</div>
          <div>{day} ₽</div>
        </div>
        <div className="row">
          <div>Per week</div>
          <div>{week} ₽</div>
        </div>
        <div className="row">
          <div>Per month</div>
          <div>{month} ₽</div>
        </div>
      </div>
    </section>
  );
};

export default Expenses;
