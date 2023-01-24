import React from "react";
import { screen, render } from "@testing-library/react";

import TransactionSection from "./TransactionSection";
import loadMockedTransactionSection from "../../utils/loadMockedTransactions";
import { DayTransactions } from "../../types/transactions.type";

const transactionHistory = loadMockedTransactionSection().transactionHistory;

function valueCount(dayTransactions: DayTransactions[]): {
  [P: string]: number;
} {
  const valueCounter: { [P: string]: number } = {};
  const addValueToCounter = (value: string): void => {
    if (value in valueCounter) {
      valueCounter[value] += 1;
    } else {
      valueCounter[value] = 1;
    }
  };

  for (const { date, transactionList } of dayTransactions) {
    addValueToCounter(new Date(date).toDateString());

    for (const transaction of transactionList) {
      for (const [key, value] of Object.entries(transaction)) {
        if (key === "id") {
          continue;
        }
        addValueToCounter(value);
      }
    }
  }

  return valueCounter;
}

describe("TransactionSection", () => {
  it("renders section with data", () => {
    render(<TransactionSection transactionHistory={transactionHistory} />);

    const valueCounter = valueCount(transactionHistory);
    for (const [value, count] of Object.entries(valueCounter)) {
      expect(screen.getAllByText(value).length).toBe(count);
    }
  });
});
