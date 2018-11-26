import React, { Component } from 'react'


import './App.css';
import Login from './components/log/login'
import Navbar from './components/navbar'

class App extends Component {

  

  
  render() {
    return (
      <div className="app">
          <Navbar />
          <Login onSubmit={this.onSubmit}/>
      </div>
         
    )
  }
}

export default App;
