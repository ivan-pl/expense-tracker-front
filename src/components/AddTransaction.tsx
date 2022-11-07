import React, { FC } from "react";

import "./AddTransaction.scss";

interface IProps {
  className: string;
}

const AddTransaction: FC<IProps> = ({ className }: IProps) => {
  return <button className={"add-transaction " + className} />;
};

export default AddTransaction;
