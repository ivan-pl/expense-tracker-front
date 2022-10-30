import "./Transaction.scss";

interface IProps {
  "transaction-info": {
    tag: string;
    payMethod: string;
    comment: string;
    amount: string;
  };
}

export function Transaction(props: IProps) {
  return (
    <div className="transaction">
      <div className="tag">{props["transaction-info"].tag}</div>
      <div className="pay-method">{props["transaction-info"].payMethod}</div>
      <div className="comment">{props["transaction-info"].comment}</div>
      <div className="amount">{props["transaction-info"].amount}</div>
    </div>
  );
}

export default Transaction;
