import { render, cleanup } from "@testing-library/react";
import React from "react";

import { AppBar } from "./AppBar";

describe("Component: AppBar", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    const { container } = render(<AppBar />);

    expect(container).toBeTruthy();
  });
});
