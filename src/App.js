import React, { useState, useContext, useEffect } from "react"
import Goals from "./components/Goals/Goals"
import SideNavBar from "./components/SideNavBar"
import LoginForm from "./components/LoginForm"
import RegistrationForm from "./components/RegistrationForm"
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom"
import { UserContext } from "./context/UserContext"
import DigitalHealthScore from "./components/DigitalHealthScore "

const linkStyle = {
  textDecoration: "none",
  color: "white",
  fontSize: "1.5em",
}

const altButtonStyle = {
  outline: "1px solid '#1d4ed8",
  marginLeft: "1.5em",
  background: "#ffffff",
  color: "#1d4ed8",
}

// todo Change register labels to "Signup"
// adjust font on navbar

function App() {
  const { user, setUser } = useContext( UserContext )
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {user.name === "isLoggedOut" ? <Redirect to="/login" /> : <Redirect to="/digitalhealthscore" />}</Route>
          <Route exact path="/registration">
            <RegistrationForm
              altpath={
                <Link to="/login">
                  <button style={altButtonStyle}>
                    Login
                  </button>
                </Link>
              }
            />
          </Route>
          <Route exact path="/login">
            <LoginForm
              altpath={
                <Link to="/registration">
                  <button style={altButtonStyle}>
                    Register
                  </button>
                </Link>
              }
            />
          </Route>
          <Route exact path="/goals">
            <SideNavBar altpath={
              <Link to="/login">
                <button style={altButtonStyle}>
                  Logout
                </button>
              </Link>
            } />
            <Goals />
          </Route>
          <Route exact path="/digitalhealthscore">
            <SideNavBar altpath={
              <Link to="/login">
                <button style={altButtonStyle}>
                  Logout
                </button>
              </Link>
            } />
            <DigitalHealthScore />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
