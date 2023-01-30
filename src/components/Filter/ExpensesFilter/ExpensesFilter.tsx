import React, {
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
  useState,
  useEffect,
} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { filterExpenses } from "../../../store/transactionsSlice";
import setStateBySearchParams from "../utils/setStateBySearchParams";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const ExpensesFilter: FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const filterState = useAppSelector(
    (state) => state.transactions.filter.expensesPage
  );

  const [dateFrom, setDateFrom] = useState(
    searchParams.get("dateFrom") || filterState.dateFrom
  );
  const [dateTo, setDateTo] = useState(
    searchParams.get("dateTo") || filterState.dateTo
  );
  const [pattern, setPattern] = useState(
    searchParams.get("pattern") || filterState.pattern
  );

  const handlePattern = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPattern = e.target.value;
    dispatch(filterExpenses({ pattern: newPattern }));
    setPattern(newPattern);
    setSearchParams({ dateFrom, dateTo, pattern: newPattern });
  };

  const handleDateFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDateFrom = e.target.value;
    dispatch(filterExpenses({ dateFrom: newDateFrom }));
    setDateFrom(newDateFrom);
    setSearchParams({ dateFrom: newDateFrom, dateTo, pattern });
  };

  const handleDateTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDateTo = e.target.value;
    dispatch(filterExpenses({ dateTo: newDateTo }));
    setDateTo(newDateTo);
    setSearchParams({ dateFrom, dateTo: newDateTo, pattern });
  };

  useEffect(() => {
    setStateBySearchParams(dispatch, filterExpenses, searchParams, [
      "dateFrom",
      "dateTo",
      "pattern",
    ]);
  }, []);

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
