import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import {Ex1} from './Exercises/Ex1';

class App extends Component {
  render() {
    return (
      <div>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>ReactND - Coding Practice</h1>
        </header>
        <Ex1 />
      </div>
    );
  }
}

export default App;
