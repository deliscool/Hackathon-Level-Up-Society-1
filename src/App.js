import React, { useState, useContext, useEffect } from "react"
import Goals from "./components/Goals/Goals"
import SideNavBar from "./components/SideNavBar/SideNavBar"
import LoginForm from "./components/LoginForm"
import RegistrationForm from "./components/RegistrationForm"
import AvatarStore from "./components/AvatarStore/AvatarStore"
import About from "./components/About/About"
import Configure from "./components/Configure/Configure"

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
import { DigiHealthContext } from "./context/ContextProvider"

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

// adjust font on navbar

function App( props ) {
  const { user, setUser } = useContext( UserContext )
  const { history } = useContext( DigiHealthContext )
  return (
    <div className="App">
      <Router history={history}>
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
                    Signup
                  </button>
                </Link>
              }
            />
          </Route>
          <Route exact path="/configure">
            <SideNavBar altpath={
              <Link to="/login">
                <button style={altButtonStyle}>
                  Logout
                </button>
              </Link>
            } />
            <Configure />
          </Route>
          <Route exact path="/about">
            <SideNavBar altpath={
              <Link to="/login">
                <button style={altButtonStyle}>
                  Logout
                </button>
              </Link>
            } />
            <About />
          </Route>
          <Route exact path="/avatarstore">
            <SideNavBar altpath={
              <Link to="/login">
                <button style={altButtonStyle}>
                  Logout
                </button>
              </Link>
            } />
            <AvatarStore />
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
                <button className="smallButton">
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
