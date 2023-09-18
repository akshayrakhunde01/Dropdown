import logo from './logo.svg';
import './App.css';
import React from 'react';
import Dropdown from './Dropdown'; // Import the Dropdown component once

function App() {
  const items = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Dropdown items={items} />
    </div>
  );
}

export default App;
