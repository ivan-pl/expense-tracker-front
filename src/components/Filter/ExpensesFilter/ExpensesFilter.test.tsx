import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

import store from "../../../store";
import ExpensesFilter from "./ExpensesFilter";
import formatDate from "../../../utils/formatDate";

describe("ExpensesFilter", () => {
  it("renders filter", () => {
    render(
      <Provider store={store}>
        <ExpensesFilter />
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
