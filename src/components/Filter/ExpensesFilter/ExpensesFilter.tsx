import React, { FC, DetailedHTMLProps, HTMLAttributes, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { filterExpenses } from "../../../store/transactionsSlice";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const ExpensesFilter: FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();

  const filterState = useAppSelector(
    (state) => state.transactions.filter.expensesPage
  );

  const [dateFrom, setDateFrom] = useState(filterState.dateFrom);
  const [dateTo, setDateTo] = useState(filterState.dateTo);
  const [pattern, setPattern] = useState(filterState.pattern);

  const handlePattern = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPattern = e.target.value;
    dispatch(filterExpenses({ pattern: newPattern, dateFrom, dateTo }));
    setPattern(newPattern);
  };

  const handleDateFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDateFrom = e.target.value;
    dispatch(filterExpenses({ pattern, dateFrom: newDateFrom, dateTo }));
    setDateFrom(newDateFrom);
  };

  const handleDateTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDateTo = e.target.value;
    dispatch(filterExpenses({ pattern, dateFrom, dateTo: newDateTo }));
    setDateTo(newDateTo);
  };

  return (
    <Row className={"my-3 mb-md-0 " + className}>
      <Form.Floating as={Col} xs="12" lg="6" className="mb-3 mb-lg-0">
        <Form.Control
          id="filterPattern"
          type="text"
          placeholder="Search by Tag, amount, comment"
          value={pattern}
          onChange={handlePattern}
        />
        <label htmlFor="filterPattern">Search by Tag, amount, comment</label>
      </Form.Floating>

      <Form.Floating as={Col} className="mb-3 mb-md-0" xs="6" lg="3">
        <Form.Control
          id="filterDateFrom"
          type="date"
          placeholder="Date from"
          value={dateFrom}
          onChange={handleDateFrom}
        />
        <label htmlFor="filterDateFrom">Date from</label>
      </Form.Floating>

      <Form.Floating as={Col} className="mb-3 mb-md-0" xs="6" lg="3">
        <Form.Control
          id="filterDateTo"
          data-testid="filterDateTo"
          type="date"
          placeholder="Date to"
          value={dateTo}
          onChange={handleDateTo}
        />
        <label htmlFor="filterDateTo">Date to</label>
      </Form.Floating>
    </Row>
  );
};

export default ExpensesFilter;
