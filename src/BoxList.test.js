import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

// it("should add a new box", function () {
//   const { queryByText, getByLabelText, queryAllByText } = render(<BoxList />);
//   const colorInput = getByLabelText("Color:");
//   const widthInput = getByLabelText("Width:");
//   const heightInput = getByLabelText("Height:");
//   const button = queryByText("Add Box!");
//   fireEvent.change(colorInput, { target: { value: "blue" } });
//   fireEvent.change(widthInput, { target: { value: "100px" } });
//   fireEvent.change(heightInput, { target: { value: "100px" } });
//   fireEvent.click(button);

//   expect(queryAllByText("X")).toBeInTheDocument();
// });
