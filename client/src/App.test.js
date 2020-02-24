import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from "./components/NavBar";
import { render } from "@testing-library/react";
import PlayerCard from "./components/PlayerCard";


test('renders without crashing', () => {
  ReactDOM.render(<App />);
});

xtest("search for string Marta", () => {
   const {getByText} = ReactDOM.render(<App />);

   getByText(/marta/i);
});

xdescribe('NavBar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar/>, div);
  ReactDOM.unmountComponentAtNode(div);
})

xdescribe('A PlayerCard manages to render successfully without crashing the application', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayerCard/>, div);
  ReactDOM.unmountComponentAtNode(div);
})
