import React from "react";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "../../store";
import Transaction from "./Transaction";
import {
  PayMethod,
  Tag,
  Transaction as TransactionType,
} from "../../types/transactions.type";

describe("Transaction", () => {
  it("renders transaction", () => {
    const date = "2022-11-23";
    const transaction: Omit<TransactionType, "id"> = {
      amount: "243",
      comment: "Some comment",
      payMethod: PayMethod.Credit,
      tag: Tag.Clothing,
    };
    render(
      <Provider store={store}>
        <Transaction date={date} transaction={transaction as TransactionType} />{" "}
      </Provider>
    );

    for (const value of Object.values(transaction)) {
      expect(screen.getByText(new RegExp(value))).toBeInTheDocument();
    }
  });
});
