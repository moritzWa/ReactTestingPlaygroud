import React from "react";

import ReactDOM from "react-dom";
import Button from "./../button";

import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
});

//cleanup

it("render button correctly", () => {
  const { getByTestId } = render(<Button label="click this" />);
  expect(getByTestId("button").textContent).toBe("click this");
});
