import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import Result from "../Result";

describe("Checks the title component", () => {
  it("checks the value of the Title component", () => {
    const { getByText } = render(<Result />);
    const titleValue = getByText(" Results page");
    expect(titleValue).toBe(" Results page");
  });
});
