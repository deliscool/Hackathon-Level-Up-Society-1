import React, { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router'
import { UserContext, UserContextProvider } from '../context/UserContext'
import { DigiHealthContext } from '../context/ContextProvider'
import DashboarView from './DashboardView'


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
            <form className="goalsForm" id="goalsForm">
                <h3>Adjust Your Goals</h3>
                <label>Weekly<input type="toggle" />Monthly</label>
                <input type="range" name="socialMedia" value={user.goals.socialMedia} onChange={handleChange} onChangeEnd={handleChangeEnd} />
                <input type="range" name="productivity" value={user.goals.productivity} onChange={handleChange} onChangeEnd={handleChangeEnd} />
                <input type="range" name="gaming" value={user.goals.gaming} onChange={handleChange} onChangeEnd={handleChangeEnd} />
                <input type="range" name="webBrowsing" value={user.goals.webBrowsing} onChange={handleChange} onChangeEnd={handleChangeEnd} />
                <input type="range" name="streaming" value={user.goals.streaming} onChange={handleChange} onChangeEnd={handleChangeEnd} />
            </form>
        </DashboarView>
    )
}

export default Goals