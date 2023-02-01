import React, { FC, DetailedHTMLProps, HTMLAttributes } from "react";

import TransactionSection from "../../components/TransactionSection/TransactionSection";
import AddTransaction from "../../components/AddTransaction/AddTransaction";
import { ExpensesFilter } from "../../components/Filter";
import { useAppSelector } from "../../app/hooks";
import {
  selectTransactionsHistory,
  selectFilterExpenses,
} from "../../store/transactionsSelectors";
import countTotal, { Total as TotalValues } from "./utils/countTotal";
import filterTransactionsHistory from "../../utils/filterTransactions";
import EditTransaction from "../../components/EditTransaction";
import "./Expenses.scss";

const Expenses: FC = () => {
  let transactionsHistory = useAppSelector(selectTransactionsHistory);
  const filter = useAppSelector(selectFilterExpenses);
  transactionsHistory = filterTransactionsHistory(transactionsHistory, filter);

  const total = countTotal(transactionsHistory);

  return (
    <div className="expenses">
      <Total
        day={total.day}
        week={total.week}
        month={total.month}
        className="expenses__total"
      />
      <ExpensesFilter className="expenses__filter" />
      <TransactionSection
        transactionsHistory={transactionsHistory}
        className="expenses__transactions"
      />
      <AddTransaction className="expenses__add" />
      <EditTransaction />
    </div>
  );
};

interface TotalProps
  extends TotalValues,
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Total: FC<TotalProps> = ({ day, week, month, className }) => {
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
