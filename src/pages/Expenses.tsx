import React, { FC, DetailedHTMLProps, HTMLAttributes } from "react";

import { ITransactionSection } from "../types/transactions.type";
import TransactionSection from "../components/TransactionSection/TransactionSection";
import AddTransaction from "../components/AddTransaction/AddTransaction";
import TransactionFilter from "../components/TransactionFilter/TransactionFilter";
import "../styles/Expenses.scss";
import loadMockedTransactionSection from "../scripts/loadMockedTransactions";

const mockedTransactionSection = loadMockedTransactionSection();

const Expenses: FC = () => {
  const total = mockedTransactionSection.total;
  const transactionHistory = mockedTransactionSection.transactionHistory;
  return (
    <div className="expenses">
      <Total total={total} className="expenses__total" />
      <TransactionFilter className="expenses__filter" />
      <TransactionSection
        transactionHistory={transactionHistory}
        className="expenses__transactions"
      />
      <AddTransaction className="expenses__add" />
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
