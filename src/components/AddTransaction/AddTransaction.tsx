import React, { FC } from "react";

import "./AddTransaction.scss";

interface Props {
  className?: string;
}

const AddTransaction: FC<Props> = ({ className = "" }: Props) => {
  return (
    <button
      className={"add-transaction " + className}
      data-testid="add-transaction"
    >
      <span className="add-transaction__icon"></span>
    </button>
  );
};

export default AddTransaction;
