import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

<<<<<<< HEAD
test("renders hello world", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hello world!/i);
  expect(linkElement).toBeInTheDocument();
=======
test("renders Input", () => {
  const { getByPlaceholderText } = render(<App />);
  const inputElement = getByPlaceholderText(/Start typing/);
  expect(inputElement).toBeInTheDocument();
});

test("renders MessageBox", () => {
  const { getByText } = render(<App />);
  const messageBoxElement = getByText(/Last key pressed was:/);
  expect(messageBoxElement).toBeInTheDocument();
>>>>>>> b5a40a9... Creating components for keystroke capture (Input) and last keystroke message display (MessageBox)
});
