import React, { useContext } from "react"
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import { UserContext } from "./context/UserContext"
import { DigiHealthContext } from "./context/ContextProvider"
import SideNavBar from "./components/SideNavBar/SideNavBar"
import Goals from "./components/Goals/Goals"
import AvatarShop from "./components/AvatarShop/AvatarShop"
import LoginForm from "./components/Forms/LoginForm"
import SignUpForm from "./components/Forms/SignUpForm"
import Configure from "./components/Configure/Configure"
import Modal from "./components/Modal/Modal"
import About from "./components/About/About"
import DigitalHealthScore from "./components/DigitalHealthScore"

const altButtonStyle = {
  outline: "1px solid '#1d4ed8",
  marginLeft: "1.5em",
  background: "#ffffff",
  color: "#1d4ed8",
}

// adjust font on navbar


function App( props ) {
  const { user } = useContext( UserContext )
  const { openModal, setOpenModal, history } = useContext( DigiHealthContext )
  return (


    <div className="App">
      <Router history={history}>
        <Switch>
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
          <Route exact path="/avatarshop">
            <SideNavBar altpath={
              <Link to="/login">
                <button style={altButtonStyle}>
                  Logout
                </button>
              </Link>
            } />
            <AvatarShop />
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
