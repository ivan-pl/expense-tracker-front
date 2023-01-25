import React from "react";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "../../store";
import TransactionSection from "./TransactionSection";
import loadMockedTransactionsHistory from "../../utils/loadMockedTransactions";
import { DayTransactions } from "../../types/transactions.type";

const transactionHistory = loadMockedTransactionsHistory();

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
    render(
      <Provider store={store}>
        <TransactionSection transactionsHistory={transactionHistory} />
      </Provider>
    );

    const valueCounter = valueCount(transactionHistory);
    for (const [value, count] of Object.entries(valueCounter)) {
      expect(screen.getAllByText(new RegExp(value)).length).toBe(count);
    }
  });
});
