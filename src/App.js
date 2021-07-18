import React, { useState, useContext, useEffect } from "react"
import Goals from "./components/Goals/Goals"
import SideNavBar from "./components/SideNavBar"
import LoginForm from "./components/LoginForm"
import SignUpForm from "./components/SignUpForm"
import Modal from "./components/Modal"
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom"
import { UserContext } from "./context/UserContext"
import { DigiHealthContext } from "./context/ContextProvider"
import DigitalHealthScore from "./components/DigitalHealthScore"
import AvatarShop from "./components/AvatarShop"

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


// todo adjust font on navbar

function App() {
  const { user, setUser } = useContext( UserContext )
  const { openModal, setOpenModal } = useContext(DigiHealthContext)
  return (

   
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {user.name === "isLoggedOut" ? <Redirect to="/login" /> : <Redirect to="/digitalhealthscore" />}</Route>
          <Route exact path="/signup">
            <SignUpForm
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
                <Link to="/signup">
                  <button style={altButtonStyle}>
                    Sign Up
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
          <Route exact path="/modal">
            <Modal
              altpath={
              <Link to="/signup">
                <button style={altButtonStyle}>
                  Get Started
                </button>
              </Link>
            } />
          </Route>
          <Route exact path="/digihealthshop">
            <SideNavBar altpath={
              <Link to="/login">
                <button style={altButtonStyle}>
                  Logout
                </button>
              </Link>
            } />
            <AvatarShop />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
