import React, { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import { DigiHealthContext } from "../context/ContextProvider"
import users from "../context/users"

const SideNavBar = props => {
    const { currentView, setCurrentView } = useContext( DigiHealthContext )
    const { user, setUser } = useContext( UserContext )


    const handleClick = e => {
        const button = e.target
        const name = button.getAttribute( "id" )
        const selectedUser = users.filter( person => person.name.toLocaleLowerCase() === name.toLocaleLowerCase() )
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
                <div className="statsRow">
                    <h5>Total Screen Time: </h5>
                    <p>{user.totalScreenTime}</p>
                </div>
                <div className="statsRow">
                    <h5>Total Sites Per Day: </h5>
                    <p>{user.totalSitesPerDay}</p>
                </div>
                <div className="statsRow">
                    <h5>Total Digital IDs: </h5>
                    <p>{user.totalDigitalIds}</p>
                </div>
                <div className="statsRow">
                    <h5>Most Time Spent: </h5>
                    <p>{user.mostTimeSpent}</p>
                </div>
                <div className="statsRow">
                    <h5>Money Spent: </h5>
                    <p>{user.moneySpent}</p>
                </div>
            </div>
            {props.children}
            <Link to={currentView.pathname === '/goals' ? "/digitalhealthscore" : "/goals"}><button className="largeButton">{currentView.pathname === '/goals' ? "Back to Dashboard" : "Goals"}</button></Link>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "80%", margin: " 0 auto", backgroundImage: "linear-gradient(to right, #00dbde 0%, #fc00ff 100%)", borderRadius: "20px", padding: "10px" }}
            >{props.altpath}
                <button id="guest" onClick={handleClick}>
                    Guest
                </button>
                <button id="jane" onClick={handleClick}>
                    Jane
                </button>
                <button id="joseph" onClick={handleClick}>
                    Joseph
                </button>
            </div>
            <p className="about">About us</p>
        </nav>
    )
}


export default SideNavBar
