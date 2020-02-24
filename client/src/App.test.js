import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from "./components/NavBar";
import PlayerCard from "./components/PlayerCard";


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

xit('NavBar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar/>, div);
  ReactDOM.unmountComponentAtNode(div);
})

xit('A PlayerCard manages to render successfully without crashing the application', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayerCard/>, div);
  ReactDOM.unmountComponentAtNode(div);
})
