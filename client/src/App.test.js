import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "@testing-library/react";

test('renders without crashing', () => {
  render(<App />);
});

test("search for string Marta", () => {
   const {getByText} = render(<App />);

   getByText(/marta/i);
});

test("search for last name Tierna", () => {
  const { getByText } = render(<App />);
  getByText(/tierna/);
});

test("search for string Person", () => {

  const {getByText } = render(<App />);
  getByText(/person/i);
});

test("search for string App.js", () => {
  const { getByText } = render(<App/>);
  getByText(/app/i);
});