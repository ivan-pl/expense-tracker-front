import React from "react";
import { render, screen } from "@testing-library/react";

import TransactionFilter from "./TransactionFilter";

describe("TransactionFilter", () => {
  it("renders filter", () => {
    render(<TransactionFilter />);
    expect(screen.getByPlaceholderText(/search by /i)).toBeInTheDocument();
    expect(screen.getByText("Latest")).toBeInTheDocument();
    expect(screen.getByText("For the period")).toBeInTheDocument();
  });
});
