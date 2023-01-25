import React, { FC, DetailedHTMLProps, HTMLAttributes, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { filterAnalytics } from "../../../store/transactionsSlice";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const AnalyticsFilter: FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();

  const filterState = useAppSelector(
    (state) => state.transactions.filter.analyticsPage
  );

  const [dateFrom, setDateFrom] = useState(filterState.dateFrom);
  const [dateTo, setDateTo] = useState(filterState.dateTo);

  const handleDateFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDateFrom = e.target.value;
    dispatch(filterAnalytics({ dateFrom: newDateFrom, dateTo }));
    setDateFrom(newDateFrom);
  };

  const handleDateTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDateTo = e.target.value;
    dispatch(filterAnalytics({ dateFrom, dateTo: newDateTo }));
    setDateTo(newDateTo);
  };

  return (
    <Row className={"my-3 mb-md-0 " + className}>
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

export default AnalyticsFilter;
