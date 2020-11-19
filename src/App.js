import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import GetStart from './Components/GetStart/GetStart';
import Login from './Components/Login/Login';
import Proceed from './Components/Proceed/Proceed';
function App() {
  return (
   <Router>
      <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/getStart">
            <GetStart></GetStart>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/proceed">
           <Proceed></Proceed>
          </Route>
        </Switch>
   </Router>
  );
}

export default App;
