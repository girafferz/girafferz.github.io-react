import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hiroyuki Shirai</h2>
        </div>
        <div>
        <a href="https://www.facebook.com/shiraih" className="App-intro">facebook</a>
        </div>
        <div>
        <a href="https://store.line.me/stickershop/author/1340/ja" className="App-intro">LINE sticker</a>
        </div>
        <div>
        LINE-BOT
        </div>
        <img className="App-qr" src="http://qr-official.line.me/L/ccOm53nudN.png" />
      </div>
    );
  }
}

export default App;
