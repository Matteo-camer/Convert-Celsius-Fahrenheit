import React from 'react'
import './App.css';
import Navbar from "./app_components/navbar"
import {BrowserRouter as Router, Switch, Route}from "react-router-dom"
import Home from "./app_components/pages/home"
import Services from './app_components/pages/services';
import Products from './app_components/pages/products';
import SignUp from './app_components/pages/sing-up';
 
class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/products" component={Products} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </Router>
  )}
}

export default App;
