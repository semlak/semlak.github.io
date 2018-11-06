import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Portfolio from './pages/Portfolio/Portfolio';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
