import React, { FC, DetailedHTMLProps, HTMLAttributes } from "react";

import { TransactionsInfo } from "../../types/transactions.type";
import TransactionSection from "../../components/TransactionSection/TransactionSection";
import AddTransaction from "../../components/AddTransaction/AddTransaction";
import TransactionFilter from "../../components/TransactionFilter/TransactionFilter";
import "./Expenses.scss";
import loadMockedTransactionSection from "../../utils/loadMockedTransactions";

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

interface TotalProps
  extends Pick<TransactionsInfo, "total">,
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Total: FC<TotalProps> = ({
  total: { day, week, month },
  className,
}: TotalProps) => {
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
