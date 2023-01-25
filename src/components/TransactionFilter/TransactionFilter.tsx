import React, { FC, DetailedHTMLProps, HTMLAttributes, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import formatDate from "../../utils/formatDate";
import "./TransactionFilter.scss";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const TransactionFilter: FC<Props> = ({ className }) => {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState(formatDate(new Date()));
  const [pattern, setPattern] = useState("");

  return (
    <Row className={"my-3 mb-md-0 " + className}>
      <Form.Floating as={Col} xs="12" lg="6" className="mb-3 mb-lg-0">
        <Form.Control
          id="filterPattern"
          type="text"
          placeholder="Search by Tag, amount, comment"
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
        />
        <label htmlFor="filterPattern">Search by Tag, amount, comment</label>
      </Form.Floating>

      <Form.Floating as={Col} className="mb-3 mb-md-0" xs="6" lg="3">
        <Form.Control
          id="filterDateFrom"
          type="date"
          placeholder="Date from"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
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
          onChange={(e) => setDateTo(e.target.value)}
        />
        <label htmlFor="filterDateTo">Date to</label>
      </Form.Floating>
    </Row>
  );
};

export default TransactionFilter;
