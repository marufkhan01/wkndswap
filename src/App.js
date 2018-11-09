import React, { Component } from 'react';


import './App.css';
import Login from './components/log/login';

class App extends Component {

  

  
  render() {
    return (
      <div className="app">
          <h1>wkndswap</h1>
          <Login onSubmit={this.onSubmit}/>
      </div>
         
    );
  }
}

export default App;
