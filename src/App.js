import React from 'react';
import logo from './jamiedrink.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Jamie has a <i>yummy</i> drink and a juicy <s>ass</s> burger</h1>
      </header>
    </div>
  );
}

export default App;