import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

import store from "../../store";
import TransactionFilter from "./TransactionFilter";
import formatDate from "../../utils/formatDate";

describe("TransactionFilter", () => {
  it("renders filter", () => {
    render(
      <Provider store={store}>
        <TransactionFilter />
      </Provider>
    );
    expect(screen.getByPlaceholderText(/search by /i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Date from")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Date to")).toBeInTheDocument();
    expect((screen.getByTestId("filterDateTo") as HTMLInputElement).value).toBe(
      formatDate(new Date())
    );
  });
});
