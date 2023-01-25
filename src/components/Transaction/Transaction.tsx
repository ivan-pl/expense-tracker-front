import React, { FC } from "react";
import { Transaction as TransactionType } from "../../types/transactions.type";
import "./Transaction.scss";

interface Props {
  transaction: TransactionType;
}

const Transaction: FC<Props> = (props: Props) => {
  return (
    <div className="transaction">
      <div className="tag">{props.transaction.tag}</div>
      <div className="pay-method">{props.transaction.payMethod}</div>
      <div className="comment">{props.transaction.comment}</div>
      <div className="amount">{props.transaction.amount + " RUB"}</div>
    </div>
  );
};

export default Transaction;
