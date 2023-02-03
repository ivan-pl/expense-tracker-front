import React, { FC } from "react";

import { useAppDispatch } from "../../app/hooks";
import { openEditWindow } from "../../store/expensesPageSlice";
import { Transaction as TransactionType } from "../../types/transactions.type";
import "./Transaction.scss";

interface Props {
  transaction: TransactionType;
  date: string;
}

const Transaction: FC<Props> = ({ transaction, date }: Props) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(openEditWindow({ transaction, date }));
  };

  return (
    <div className="transaction" onClick={handleClick}>
      <div className="tag">{transaction.tag}</div>
      <div className="pay-method">{transaction.payMethod}</div>
      <div className="comment">{transaction.comment}</div>
      <div className="amount">{transaction.amount + " RUB"}</div>
    </div>
  );
};

export default Transaction;
