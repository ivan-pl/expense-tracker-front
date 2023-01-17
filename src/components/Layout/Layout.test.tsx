import React from "react";
import { screen, render } from "@testing-library/react";

import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom";

describe("Layout", () => {
  it("contains navigation, main and footer", () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
    expect(screen.getByTestId("nav")).toBeInTheDocument();
    expect(screen.getByTestId("main"));
    expect(screen.getByText(/Rights Reserved/i)).toBeInTheDocument();
  });
});
