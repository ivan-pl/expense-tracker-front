import React, { FC } from "react";
import { Chart } from "react-google-charts";
import { TransactionsHistory } from "../../../types/transactions.type";
import prepareData from "./utils/prepareData";

interface Props {
  transactionsHistory: TransactionsHistory;
  byField: "tag" | "payMethod";
  title: string;
}

const PieChart: FC<Props> = ({ transactionsHistory, byField, title }) => {
  const data = prepareData(transactionsHistory, byField);
  const options = {
    title,
    pieHole: 0.4,
    is3D: false,
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
};

export default PieChart;
