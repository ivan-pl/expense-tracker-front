import React, { FC, DetailedHTMLProps, HTMLAttributes } from "react";

import "./TransactionSection.scss";
import { ITransactionSection } from "../../types/transactions.type";
import DayTransactionList from "../DayTransactionList/DayTransactionList";

interface IProps
  extends Pick<ITransactionSection, "transactionHistory">,
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const TransactionSection: FC<IProps> = ({
  transactionHistory,
  className,
}: IProps) => {
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
