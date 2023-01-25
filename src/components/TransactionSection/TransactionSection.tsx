import React, { FC, DetailedHTMLProps, HTMLAttributes } from "react";

import "./TransactionSection.scss";
import { TransactionsInfo } from "../../types/transactions.type";
import DayTransactionList from "../DayTransactionList/DayTransactionList";

interface Props
  extends Pick<TransactionsInfo, "transactionsHistory">,
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const TransactionSection: FC<Props> = ({
  transactionsHistory,
  className,
}: Props) => {
  const dayTransactionList = transactionsHistory.map((dayTransaction) => (
    <DayTransactionList
      dayTransactionList={dayTransaction}
      key={dayTransaction.date}
    />
  ));
  return (
    <section className={"main-section " + className}>
      <section className="transaction-section">
        {dayTransactionList.length ? dayTransactionList : "No data"}
      </section>
    </section>
  );
};

export default TransactionSection;
