import { cleanup, render } from "@testing-library/react";
import React from "react";

import Home from "../pages_/index";

describe("Page: Home", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    // Arrange
    const { container } = render(<Home />);

    // Assert
    expect(container).toBeTruthy();
  });
});
