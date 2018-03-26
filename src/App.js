import React, { Component } from 'react';
import logo from './logo.svg';
import dickbutt from './dickbutt.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={dickbutt} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Magic City Woodworks Demo!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
