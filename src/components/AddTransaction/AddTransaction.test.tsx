import React from "react";
import { render, screen } from "@testing-library/react";

import AddTransaction from "./AddTransaction";

describe("AddTransaction", () => {
  const TEST_ID = "add-transaction";

  it("renders button", () => {
    render(<AddTransaction />);
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });

  it("supports adding classes", () => {
    const testClassName = "some-class";
    render(<AddTransaction className={testClassName} />);
    const el = screen.getByTestId(TEST_ID);

    expect(el).toBeInTheDocument();
    expect(el.classList.contains(testClassName)).toBeTruthy();
  });
});
