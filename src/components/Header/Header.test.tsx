import { cleanup, render } from "@testing-library/react";
import React from "react";

import { Header } from "./Header";

describe("Component: Header", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    // Arrange
    const { container } = render(<Header />);

    // Assert
    expect(container).toBeTruthy();
  });

  it("displays the app name", async () => {
    // Arrange
    const { findByText } = render(<Header />);

    // Assert
    expect(await findByText("scoretrac.kr", { exact: false })).toBeVisible();
  });

  it("displays some description text", async () => {
    // Arrange
    const { findByText } = render(<Header />);

    // Assert
    expect(await findByText("header.description")).toBeVisible();
  });
});
