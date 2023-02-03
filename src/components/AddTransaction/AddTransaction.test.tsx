import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";

import store from "../../store";
import AddTransaction from "./AddTransaction";

describe("AddTransaction", () => {
  const TEST_ID_BUTTON = "add-transaction";

  it("renders button", () => {
    render(
      <Provider store={store}>
        <AddTransaction />
      </Provider>
    );
    expect(screen.getByTestId(TEST_ID_BUTTON)).toBeInTheDocument();
  });

  it("supports adding classes", () => {
    const testClassName = "some-class";
    render(
      <Provider store={store}>
        <AddTransaction className={testClassName} />
      </Provider>
    );
    const el = screen.getByTestId(TEST_ID_BUTTON);

    expect(el).toBeInTheDocument();
    expect(el.classList.contains(testClassName)).toBeTruthy();
  });

  it("renders form", async () => {
    render(
      <Provider store={store}>
        <AddTransaction />
      </Provider>
    );

    await userEvent.click(screen.getByTestId(TEST_ID_BUTTON));

    expect(screen.getByTestId("date")).toBeInTheDocument();
    expect(screen.getByTestId("payMethod")).toBeInTheDocument();
    expect(screen.getByTestId("tag")).toBeInTheDocument();
    expect(screen.getByTestId("amount")).toBeInTheDocument();
    expect(screen.getByTestId("comment")).toBeInTheDocument();
    expect(screen.getByText("Close")).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  it("close form", async () => {
    const formId = "form";

    render(
      <Provider store={store}>
        <AddTransaction />
      </Provider>
    );

    await userEvent.click(screen.getByTestId(TEST_ID_BUTTON));
    expect(screen.getByTestId(formId)).toBeInTheDocument();

    await userEvent.click(screen.getByText("Close"));
    screen.debug(screen.getByText("Close"));
    await waitForElementToBeRemoved(() => screen.queryByTestId(formId));
  });
});
