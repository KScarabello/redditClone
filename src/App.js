import React, { Component } from 'react';
import Header from './Components/General/Header/Header.js';
import Footer from './Components/General/Footer/Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
