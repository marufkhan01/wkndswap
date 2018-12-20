import React, { Component } from 'react'
import './App.css';
import MainNavbar from './components/nav/mainNavbar'
import Home from'./components/Home'
import Destinations from './components/Destinations'
import Login from './components/log/login'
import Signup from './components/signup/signup'
import Footer from './components/footer/footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
  
          <MainNavbar />

          <Switch>
            {/* <Login onSubmit={this.onSubmit}/> */}
            <Signup />
            <Footer />
            <Route  path="/" exact component={Home} />
            <Route  path="/destinations" component={Destinations} />

            <Route  path="/login" omponent={Login} />

          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
