import React, { Component } from 'react'


import './App.css';
import MainNavbar from './components/nav/mainNavbar'
import Login from './components/log/Login'

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
