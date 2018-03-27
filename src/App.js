import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import dickbutt from './dickbutt.png';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Input } from 'mdbreact'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={dickbutt} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to the Magic City Woodworks Demo!</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Button color="primary">Primary</Button>
          <h2 className="mb-5">Form login</h2>
          <div className="container">
          <form>
            <p className="h5 text-center mb-4">Sign in</p>
            <Input label="Type your email"  group type="email" validate error="wrong" success="right" />
            <Input label="Type your password"  group type="password" validate />
            <div className="text-center">
              <Button>Login</Button>
            </div>
          </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
