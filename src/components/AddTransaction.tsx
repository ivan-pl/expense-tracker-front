import React, { FC } from "react";

import "./AddTransaction.scss";

interface IProps {
  className: string;
}

const AddTransaction: FC<IProps> = ({ className }: IProps) => {
  return (
    <button className={"add-transaction " + className}>
      <span className="add-transaction__icon"></span>
    </button>
  );
};

export default AddTransaction;
