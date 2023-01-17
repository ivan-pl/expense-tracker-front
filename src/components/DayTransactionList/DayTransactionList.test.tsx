import React from "react";
import { screen, render } from "@testing-library/react";
import { Tag, PayMethod } from "../../types/transactions.type";

import DayTransactionList from "./DayTransactionList";

const DAY_TRANSACTION_LIST = {
  date: new Date(2022, 11, 7),
  transactionList: [
    {
      id: "1",
      tag: Tag.Food,
      payMethod: PayMethod.Credit,
      comment: "Some comment",
      amount: "438 RUB",
    },
    {
      id: "2",
      tag: Tag.Housing,
      payMethod: PayMethod.Debit,
      comment: "Another comment",
      amount: "6540 RUB",
    },
  ],
};

describe("DayTransactionList", () => {
  it("renders transaction list", () => {
    render(<DayTransactionList dayTransactionList={DAY_TRANSACTION_LIST} />);

    expect(
      screen.getByText(DAY_TRANSACTION_LIST.date.toDateString())
    ).toBeInTheDocument();

    for (const transaction of DAY_TRANSACTION_LIST.transactionList) {
      for (const [key, value] of Object.entries(transaction)) {
        if (key === "id") {
          continue;
        }

        expect(screen.getByText(value)).toBeInTheDocument();
      }
    }
  });
});
