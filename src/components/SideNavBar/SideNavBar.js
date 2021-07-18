import React, { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import { DigiHealthContext } from "../../context/ContextProvider"
import users from "../../context/users"
import "./SideNavBar.css"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css" // optional

const SideNavBar = props => {
    const { currentView, setCurrentView } = useContext( DigiHealthContext )
    const { user, setUser } = useContext( UserContext )

    const handleClick = e => {
        const button = e.target
        const name = button.getAttribute( "id" )
        const selectedUser = users.filter(
            person =>
                person.name.toLocaleLowerCase() === name.toLocaleLowerCase()
        )
        setUser( ...selectedUser )
        console.log( name )
    }

    return (
        <nav className="sideNavBar">
            <h1 className="digihealth">DigiHealth</h1>

            <div className="greetingBox">
                <h4>Welcome</h4>
                <h3 className="userName">{user.name}</h3>
            </div>
            <div className="statsContainer">
                <Tippy
                    content={
                        <span>
                            Total Screen Time: How many hours spent online
                        </span>
                    }
                    theme="digihealth"
                    placement="right"
                    delay="205"
                    animation="scale-subtle">
                    <div className="statsRow">
                        <p>Total Screen Time: </p>
                        <h5>{user.totalScreenTime}</h5>
                    </div>
                </Tippy>
                <Tippy
                    content={
                        <span>
                            Total Sites Per Day: How many sites you vistit per
                            day
                        </span>
                    }
                    theme="digihealth"

                    placement="right"
                    delay="205"
                    animation="scale-subtle">
                    <div className="statsRow">
                        <p>Total Sites Per Day: </p>
                        <h5>{user.totalSitesPerDay}</h5>
                    </div>
                </Tippy>
                <Tippy
                    content={
                        <span>
                            Total Digital IDs: How many logins you have online
                        </span>
                    }
                    theme="digihealth"

                    placement="right"
                    delay="205"
                    animation="scale-subtle">
                    <div className="statsRow">
                        <p>Total Digital IDs: </p>
                        <h5>{user.totalDigitalIds}</h5>
                    </div>
                </Tippy>
                <Tippy
                    content={
                        <span>
                            Most Time Spent: Which site you spend the most time
                            on
                        </span>
                    }
                    theme="digihealth"

                    placement="right"
                    delay="205"
                    animation="scale-subtle">
                    <div className="statsRow">
                        <p>Most Time Spent: </p>
                        <h5>{user.mostTimeSpent}</h5>
                    </div>
                </Tippy>
                <Tippy
                    content={
                        <span>
                            Money Spent: Which site you spend the most money on
                        </span>
                    }
                    theme="digihealth"

                    placement="right"
                    delay="205"
                    animation="scale-subtle">
                    <div className="statsRow">
                        <p>Money Spent: </p>
                        <h5>{user.moneySpent}</h5>{" "}
                    </div>
                </Tippy>
                <div className="statsRow"></div>
                <div className="statsRow"></div>
                <div className="statsRow"></div>
                <div className="statsRow"></div>
            </div>
            {props.children}
            <div className="navButtonGroup">
                <Link
                    to={
                        currentView.pathname === "/goals"
                            ? "/digitalhealthscore"
                            : "/goals"
                    }>
                    <button className="largeButton">
                        {currentView.pathname === "/goals"
                            ? "Back to Dashboard"
                            : "Goals"}
                    </button>
                </Link>
                <Link
                    to={
                        currentView.pathname === "/avatarstore"
                            ? "/digitalhealthscore"
                            : "/avatarstore"
                    }>
                    <button className="smallButton" id="avatarStoreButton">
                        {currentView.pathname === "/avatarstore"
                            ? "Back to Dashboard"
                            : "Avatar Store"}
                    </button>
                </Link>
            </div>
            <Link to="/about">
                <p className="about">About us</p>
            </Link>
        </nav>
    )
}

export default SideNavBar
