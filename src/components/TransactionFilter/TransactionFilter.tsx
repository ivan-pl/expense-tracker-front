import React, { FC, DetailedHTMLProps, HTMLAttributes } from "react";
import "./TransactionFilter.scss";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const TransactionFilter: FC<Props> = ({ className }) => {
  return (
    <div className={"filter " + className}>
      <InputPattern />
      <FilterTime />
    </div>
  );
};

const InputPattern: FC = () => {
  return (
    <input
      type="text"
      id="filter-pattern"
      className="filter-pattern"
      placeholder="Search by name, amount, comment"
    />
  );
};

const FilterTime: FC = () => {
  return (
    <ul className="periods">
      <li className="periods__item periods__item--active">Latest</li>
      <li className="periods__item ">For the period</li>
    </ul>
  );
};

export default TransactionFilter;
