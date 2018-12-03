import React, { Component } from 'react'
import './App.css';
import MainNavbar from './components/nav/mainNavbar'
import Login from './components/log/login'
import Contact from './components/contact/contact'

class App extends Component {
  render() {
    return (
      <div className="app">
          <MainNavbar />
          <Login onSubmit={this.onSubmit}/>
          <Contact/>
      </div>
    )
  }
}

export default App;
