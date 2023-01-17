import React, { FC, DetailedHTMLProps, HTMLAttributes } from "react";

import "./TransactionSection.scss";
import { TransactionsInfo } from "../../types/transactions.type";
import DayTransactionList from "../DayTransactionList/DayTransactionList";

interface Props
  extends Pick<TransactionsInfo, "transactionHistory">,
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const TransactionSection: FC<Props> = ({
  transactionHistory,
  className,
}: Props) => {
  const dayTransactionList = transactionHistory.map((dayTransaction) => (
    <DayTransactionList
      dayTransactionList={dayTransaction}
      key={dayTransaction.date.getTime().toString()}
    />
  ));
  return (
    <section className={"main-section " + className}>
      <section className="transaction-section">{dayTransactionList}</section>
    </section>
  );
};

export default TransactionSection;
