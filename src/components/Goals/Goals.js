import React, { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router'
import { UserContext, UserContextProvider } from '../../context/UserContext'
import { DigiHealthContext } from '../../context/ContextProvider'
import DashboarView from '../DashboardView'
import './Goals.css'


const Goals = props => {
    const currentPage = useLocation()
    const { currentView, setCurrentView } = useContext( DigiHealthContext )
    const { user, setUser } = useContext( UserContext )
    const [formGoals, setFormGoals] = useState( {
        socialMedia: 45,
        productivity: 45,
        gaming: 45,
        webBrowsing: 45,
        streaming: 45,
    } )

    const handleChange = e => {
        const { name, value } = e.target
        setFormGoals( prevState => ( {
            ...prevState,
            [name]: value
        }
        ) )
    }

    const handleChangeEnd = e => {
        setUser( prevState => ( {
            ...prevState,
            goals: formGoals,
        } ) )
    }

    useEffect( () => {
        setCurrentView( currentPage )

    }, [] )

    return (
        <DashboarView pagetitle="Goals">
            <div className="goals">
                <form className="goalsForm" id="goalsForm">
                    <h3>Adjust Your Goals</h3>
                    <label style={{ display: "flex", flexDirection: "row", width: "max-content", justifyContent: "space-between" }}>Weekly
                        <div class="container">
                            <label class="switch" for="checkbox">
                                <input type="checkbox" id="checkbox" />
                                <div class="slider round"></div>
                            </label>
                        </div>Monthly</label>
                    <label htmlFor="socialMedia" >Social Media<input type="range" name="socialMedia" value={user.goals.socialMedia} onChange={handleChange} onMouseUp={handleChangeEnd} /></label>
                    <label htmlFor="productivity" >Productivity<input type="range" name="productivity" value={user.goals.productivity} onChange={handleChange} onMouseUp={handleChangeEnd} /></label>
                    <label htmlFor="gaming" >Gaming<input type="range" name="gaming" value={user.goals.gaming} onChange={handleChange} onMouseUp={handleChangeEnd} /></label>
                    <label htmlFor="webBrowsing" >Web Browsing<input type="range" name="webBrowsing" value={user.goals.webBrowsing} onChange={handleChange} onMouseUp={handleChangeEnd} /></label>
                    <label htmlFor="streaming" >Streaming<input type="range" name="streaming" value={user.goals.streaming} onChange={handleChange} onMouseUp={handleChangeEnd} /></label>
                </form>
            </div>
        </DashboarView>
    )
}

export default Goals