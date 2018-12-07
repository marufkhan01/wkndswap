import React, { Component } from 'react'
import './App.css';
import MainNavbar from './components/nav/mainNavbar'
//import Login from './components/log/login'
import Signup from './components/signup/signup'
import Footer from './components/footer/footer'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
            <MainNavbar />
            {/* <Login onSubmit={this.onSubmit}/> */}
            <Signup />
            <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
