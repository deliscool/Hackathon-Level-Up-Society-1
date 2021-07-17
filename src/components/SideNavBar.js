import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'


const SideNavBar = props => {
    const { user } = useContext( UserContext )
    return (

        <nav className="sideNavBar">
            <h1 className="digihealth">DigiHealth</h1>

            <div className="greetingBox"><h4>Welcome</h4>
                <h3 className="userName">{user.name}</h3></div>
            <div className="statsContainer">
                <div className="statsRow"><h5>Total Screen Time: </h5><p>{user.totalScreenTime}</p></div>
                <div className="statsRow"><h5>Total Sites Per Day: </h5><p>{user.totalSitesPerDay}</p></div>
                <div className="statsRow"><h5>Total Digital IDs: </h5><p>{user.totalDigitalIds}</p></div>
                <div className="statsRow"><h5>Most Time Spent: </h5><p>{user.mostTimeSpent}</p></div>
                <div className="statsRow"><h5>Money Spent: </h5><p>{user.moneySpent}</p></div>
            </div>
            {props.children}
            <button className="largeButton">GOALS</button>
            <p className="about">About us</p>
        </nav >


    )
}

export default SideNavBar