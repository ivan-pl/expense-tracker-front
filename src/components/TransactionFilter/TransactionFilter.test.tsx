import React from "react";
import { render, screen } from "@testing-library/react";

import TransactionFilter from "./TransactionFilter";

const CURRENT_DATE = "2022-11-25";
jest.useFakeTimers().setSystemTime(new Date(CURRENT_DATE));

describe("TransactionFilter", () => {
  it("renders filter", () => {
    render(<TransactionFilter />);
    expect(screen.getByPlaceholderText(/search by /i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Date from")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Date to")).toBeInTheDocument();
    expect((screen.getByTestId("filterDateTo") as HTMLInputElement).value).toBe(
      CURRENT_DATE
    );
  });
});
