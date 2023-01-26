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
import { filterAnalytics } from "../../../store/transactionsSlice";
import setStateBySearchParams from "../utils/setStateBySearchParams";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const AnalyticsFilter: FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const filterState = useAppSelector(
    (state) => state.transactions.filter.analyticsPage
  );

  const [dateFrom, setDateFrom] = useState(
    searchParams.get("dateFrom") || filterState.dateFrom
  );
  const [dateTo, setDateTo] = useState(
    searchParams.get("dateTo") || filterState.dateTo
  );

  const handleDateFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDateFrom = e.target.value;
    dispatch(filterAnalytics({ dateFrom: newDateFrom }));
    setDateFrom(newDateFrom);
    setSearchParams({ dateFrom: newDateFrom, dateTo });
  };

  const handleDateTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDateTo = e.target.value;
    dispatch(filterAnalytics({ dateTo: newDateTo }));
    setDateTo(newDateTo);
    setSearchParams({ dateFrom, dateTo: newDateTo });
  };

  useEffect(() => {
    setStateBySearchParams(dispatch, filterAnalytics, searchParams, [
      "dateFrom",
      "dateTo",
    ]);
  }, []);

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
