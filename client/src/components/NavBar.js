import React, { useState } from 'react';
import  useWhiteMode from "../hooks/useWhiteMode.js";

const NavBar = () => {
  const [whiteMode, setWhiteMode] = useWhiteMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setWhiteMode(!whiteMode);
  };
  return (
    <nav className="navbar">
      <h1>Person List</h1>
      <div className="white-mode__toggle">
        <div
          onClick={toggleMode}
          className={whiteMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default NavBar;