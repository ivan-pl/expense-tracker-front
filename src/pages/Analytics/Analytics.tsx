import React, { FC } from "react";
import Container from "react-bootstrap/Container";

import { useAppSelector } from "../../app/hooks";
import { PieChart } from "../../components/Charts";
import { AnalyticsFilter } from "../../components/Filter";
import {
  selectFilterAnalytics,
  selectTransactionsHistory,
} from "../../store/transactionsSelectors";
import filterTransactionsHistory from "../../utils/filterTransactions";

const Analytics: FC = () => {
  let transactionsHistory = useAppSelector(selectTransactionsHistory);
  const filter = useAppSelector(selectFilterAnalytics);
  transactionsHistory = filterTransactionsHistory(transactionsHistory, filter);

  return (
    <Container>
      <AnalyticsFilter />
      <PieChart
        byField="tag"
        title="Expenses by category"
        transactionsHistory={transactionsHistory}
      />
      <PieChart
        byField="payMethod"
        title="Expenses by pay method"
        transactionsHistory={transactionsHistory}
      />
    </Container>
  );
};

export default Analytics;
