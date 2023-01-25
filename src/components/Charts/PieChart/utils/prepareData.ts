import currency from "currency.js";

import { TransactionsHistory } from "../../../../types/transactions.type";

type DataType = [string, string | number][];

export default function prepareData(
  transactionsHistory: TransactionsHistory,
  byField: "tag" | "payMethod"
): DataType {
  const data: DataType = [];
  if (byField === "tag") {
    data.push(["Tag", "Total, RUB"]);
  } else {
    data.push(["Pay method", "Total, RUB"]);
  }

  const amountCounter: { [P: string]: number } = {};
  for (const { transactionList } of transactionsHistory) {
    for (const transaction of transactionList) {
      if (transaction[byField] in amountCounter) {
        amountCounter[byField] = currency(amountCounter[byField]).add(
          transaction.amount
        ).value;
      } else {
        amountCounter[byField] = currency(transaction[byField]).value;
      }
    }
  }

  data.push(...Object.entries(amountCounter));

  return data;
}
