import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import getTransactions from "../../api/getTransactions";
import isCredentialsValid from "../../api/isCredentialsValid";
import Layout from "./Layout";
import store from "../../store";
import loadUser from "../../storageController/loadUser";

jest.mock("../../storageController/loadUser");
jest.mock("../../api/isCredentialsValid");
jest.mock("../../api/getTransactions");

describe("Layout", () => {
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

  it("checks credentials", () => {
    (loadUser as jest.Mock).mockReturnValue({ uid: "qwe", token: "asd" });
    (isCredentialsValid as jest.Mock).mockResolvedValue(true);
    (getTransactions as jest.Mock).mockResolvedValue([]);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </Provider>
    );

    expect(isCredentialsValid).toBeCalled();
  });
});
