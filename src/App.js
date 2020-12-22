import React from "react";

import { Component } from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
  
import Home from "./Home/Home";
import Pricing from "./Pricing/Pricing";
import Aboutcontainer from "./Aboutcontainer/Aboutcontainer"
class App extends Component{

  render()
{

  return (

    <Router>
        <div className="container">


          <Switch>
            <Route path="/Pricing">
              <Pricing/>
            </Route>
            <Route path="/About">
              <Aboutcontainer/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
            
          </Switch>
        </div>

    </Router>
    
  );
}  
}

export default App;
