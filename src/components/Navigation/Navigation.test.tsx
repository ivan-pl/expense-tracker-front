import React from "react";
import { screen, render } from "@testing-library/react";
import { HashRouter } from "react-router-dom";

import Navigation from "./Navigation";

describe("Navigation", () => {
  it("renders nav menu", async () => {
    const navBars = ["Expenses", "Analytics", "About", "Sign out"];
    render(
      <HashRouter>
        <Navigation />
      </HashRouter>
    );

    for (const navTitle of navBars) {
      const link = screen.getByText(navTitle);
      expect(link).toBeInTheDocument();
    }
  });
});
