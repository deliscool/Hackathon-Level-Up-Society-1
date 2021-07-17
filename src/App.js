
import React, { useState, useEffect } from 'react'
import Goals from './components/Goals';
import SideNavBar from './components/SideNavBar';
import LoginForm from "./components/LoginForm"
import RegistrationForm from "./components/RegistrationForm"
import {Link, Switch, Route} from "react-router-dom"

const linkStyle = {
  textDecoration: "none",
  color: "white",
  fontSize: "1.5em"
}


function App() {

  return (
     <div className="App" style={
        {
          background: "linear-gradient(180deg, #1D4ED8 -27.02%, #FFFFFF 149.49%)",
          height: "100vh"
        }
      }>
      <Link style={linkStyle} to="/login">Login </Link>
      <Link style={linkStyle} to="/registration">Registration</Link>
        <SideNavBar />
        <Switch>
          <Route exact path="/registration"><RegistrationForm /></Route>
          <Route exact path="/login"><LoginForm /></Route>
          <Route exact path="/goals"><Goals /></Route>

       </Switch>
    </div>
  );
}

export default App;
