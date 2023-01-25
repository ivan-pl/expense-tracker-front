import React, { FC } from "react";
import Container from "react-bootstrap/Container";

import { AnalyticsFilter } from "../../components/Filter";

const Analytics: FC = () => {
  return (
    <Container>
      <AnalyticsFilter />
    </Container>
  );
};

export default Analytics;
