import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders without errors", () => {
    render(<App />);
    console.log("")
  });
});