import React, { useState, useEffect, useContext } from 'react'
import { UserContext, UserContextProvider } from '../context/UserContext'


const Goals = props => {
    const { user, setUser } = useContext( UserContext )

    const handleChange = e => {
        const { name, value } = e.target
        setUser( prevState => ( {
            ...prevState,
            goals: {
                ...prevState,
                [name]: value
            }
        }
        ) )
    }
    return (
        <main>
            <h1>Goals</h1>
            <form className="goalsForm" id="goalsForm">
                <h3>Adjust Your Goals</h3>
                <label>Weekly<input type="toggle" />Monthly</label>
                <input type="range" name="socialMedia" value={user.goals.socialMedia} onChange={handleChange} />
                <input type="range" name="productivity" value={user.goals.productivity} onChange={handleChange} />
                <input type="range" name="gaming" value={user.goals.gaming} onChange={handleChange} />
                <input type="range" name="webBrowsing" value={user.goals.webBrowsing} onChange={handleChange} />
                <input type="range" name="streaming" value={user.goals.streaming} onChange={handleChange} />
            </form>
        </main>
    )
}

export default Goals