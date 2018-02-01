import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3'

class App extends Component {
  render() {
    web3.eth.getAccounts()
      .then(console.log)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Eth Lottery</h1>
        </header>
        <p className="App-intro">
          Are you ready to roll the diiice?
        </p>
      </div>
    );
  }
}

export default App;
