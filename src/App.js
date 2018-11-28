import React, { Component } from 'react'


import './App.css';
import MainNavbar from './components/mainNavbar'
import Login from './components/log/login'

class App extends Component {

  

  
  render() {
    return (
      <div className="app">
          <MainNavbar />
          <Login onSubmit={this.onSubmit}/>
      </div>
         
    )
  }
}

export default App;
