import React from "react";

import { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home/Home";
import Pricing from "./Pricing/Pricing";
import Aboutcontainer from "./Aboutcontainer/Aboutcontainer";
import Darkfile from "./Darkfile";
class App extends Component {
  state = {
    dark: false,
  };
  Darkmode = () => {
    var x = !this.state.dark;
    this.setState({
      dark: x,
    });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/Pricing">
            <Pricing Darkmodevalue={this.Darkmode} value={this.state.dark} />
          </Route>
          <Route path="/About">
            <Aboutcontainer />
          </Route>
          <Route path="/">
            <Home Darkmodevalue={this.Darkmode} value={this.state.dark} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
