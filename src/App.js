import React, { Component } from 'react';
import Header from './Components/General/Header/Header.js';
import Home from './Components/Home/Home.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
