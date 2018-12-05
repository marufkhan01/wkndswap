import React, { Component } from 'react'
import './App.css';
import MainNavbar from './components/nav/mainNavbar'
//import Login from './components/log/login'
import Signup from './components/signup/signup'
import Footer from './components/footer/footer'

class App extends Component {
  render() {
    return (
      <div className="app">
          <MainNavbar />
          {/* <Login onSubmit={this.onSubmit}/> */}
          <Signup />
          <Footer />
      </div>
    )
  }
}

export default App;
