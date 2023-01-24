import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Layout from "./Layout";
import store from "../../store";

describe.only("Layout", () => {
  it("contains navigation, main and footer", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId("nav")).toBeInTheDocument();
    expect(screen.getByTestId("main"));
    expect(screen.getByText(/Rights Reserved/i)).toBeInTheDocument();
  });
});
