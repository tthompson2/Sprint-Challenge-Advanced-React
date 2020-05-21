import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "@testing-library/react";
import * as r from "@testing-library/react";

afterEach(r.cleanup);

test("", () => {
  const { } = r.render(<App/>);
})

test('renders without crashing', () => {
  render(<App />);
});

test("search for string successful", () => {
   const { getByText} = render(<App />);
   getByText(/successful/i);
});

test("search for the string Name", () => {
  const { getByText } = render(<App />);
  getByText(/name/i);
});

test("search for string Person", () => {

  const { getByText } = render(<App />);
  getByText(/person/i);
});

test("search for string App.js", () => {
  const { getByText } = render(<App/>);
  getByText(/app/i);
});