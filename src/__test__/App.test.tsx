import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import SelectDifficulty from "../SelectDifficulty";
import {
  componentRenderByMemoryRouter,
  toBeExpectByTestId,
  toBeExpectByText,
} from "../utils/testUtils";
import { isTSAnyKeyword } from "@babel/types";
import ReactDOM from "react-dom";

describe("Checks the title component", () => {
  it("checks the value of the Title component", () => {
    const { getByText } = render(<SelectDifficulty />);
    const titleValue = getByText(" Quiz Application");
    expect(titleValue).toBe(" Quiz Application");
  });
});
