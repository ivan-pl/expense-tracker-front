import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "../../store";
import AddTransaction from "./AddTransaction";

describe("AddTransaction", () => {
  const TEST_ID = "add-transaction";

  it("renders button", () => {
    render(
      <Provider store={store}>
        <AddTransaction />
      </Provider>
    );
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });

  it("supports adding classes", () => {
    const testClassName = "some-class";
    render(
      <Provider store={store}>
        <AddTransaction className={testClassName} />
      </Provider>
    );
    const el = screen.getByTestId(TEST_ID);

    expect(el).toBeInTheDocument();
    expect(el.classList.contains(testClassName)).toBeTruthy();
  });
});
