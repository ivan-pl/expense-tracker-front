import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

import store from "../../../store";
import AnalyticsFilter from "./AnalyticsFilter";
import formatDate from "../../../utils/formatDate";
import { HashRouter } from "react-router-dom";

describe("AnalyticsFilter", () => {
  it("renders filter", () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <AnalyticsFilter />
        </HashRouter>
      </Provider>
    );
    expect(screen.getByPlaceholderText("Date from")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Date to")).toBeInTheDocument();
    expect((screen.getByTestId("filterDateTo") as HTMLInputElement).value).toBe(
      formatDate(new Date())
    );
  });
});
