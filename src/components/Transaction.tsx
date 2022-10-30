import { ITransaction } from "../types/transactions.type";
import "./Transaction.scss";

interface IProps {
  transaction: ITransaction;
}

export function Transaction(props: IProps) {
  return (
    <div className="transaction">
      <div className="tag">{props["transaction"].tag}</div>
      <div className="pay-method">{props["transaction"].payMethod}</div>
      <div className="comment">{props["transaction"].comment}</div>
      <div className="amount">{props["transaction"].amount}</div>
    </div>
  );
}

export default Transaction;
