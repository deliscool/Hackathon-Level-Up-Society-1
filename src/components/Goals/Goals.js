import React, { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router'
import { UserContext, UserContextProvider } from '../../context/UserContext'
import { DigiHealthContext } from '../../context/ContextProvider'
import DashboarView from '../DashboardView'
import './Goals.css'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';



const Goals = props => {
    const currentPage = useLocation()
    const { currentView, setCurrentView } = useContext( DigiHealthContext )
    const [weekMonth, setWeekMonth] = useState( false )
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

    const handleToggleChange = ( e ) => {
        const { name, value } = e.target
        setWeekMonth( !weekMonth )
    }

    const handleChangeEnd = () => {
        setUser( prevState => ( {
            ...prevState,
            goals: formGoals,
        } ) )
    }

    useEffect( () => {
        handleChangeEnd()
    }, [formGoals] )

    useEffect( () => {
        setCurrentView( currentPage )

    }, [] )

    return (
        <DashboarView pagetitle="Goals">
            <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "row" }}>
                <form className="goalsForm" id="goalsForm">
                    <h3>Adjust Your Goals</h3>
                    <label style={{ display: "flex", flexDirection: "row", width: "max-content", justifyContent: "space-between" }}>Weekly
                        <div class="container">
                            <label class="switch" for="checkbox">
                                <input type="checkbox" id="checkbox" name="viewPeriod" value={weekMonth} onChange={handleToggleChange} />
                                <div class="slider round"></div>
                            </label>
                        </div>Monthly</label>
                    <RangeSlider htmlFor="socialMedia" tooltip="auto" variant="primary" />
                    {/* <RangeSlider htmlFor="productivity" tooltip="auto" variant="secondary" /> */}
                    <RangeSlider htmlFor="gaming" tooltip="auto" variant="success" />
                    <RangeSlider htmlFor="webBrowsing" tooltip="auto" variant="danger" />
                    <RangeSlider htmlFor="streaming" tooltip="auto" variant="warning" />
                    {/* <label  ><p>Social Media</p><input type="range" name="socialMedia" value={formGoals.socialMedia} onChange={handleChange} onMouseUp={handleChangeEnd} /><p>{weekMonth ? formGoals.socialMedia * 31 : formGoals.socialMedia} minutes</p></label> */}
                    {/* <label  ><p>Productivity</p><input type="range" name="productivity" value={formGoals.productivity} onChange={handleChange} onMouseUp={handleChangeEnd} /><p>{weekMonth ? formGoals.productivity * 31 : formGoals.productivity} minutes</p></label> */}
                    {/* <label  ><p>Gaming</p><input type="range" name="gaming" value={formGoals.gaming} onChange={handleChange} onMouseUp={handleChangeEnd} /><p>{weekMonth ? formGoals.gaming * 31 : formGoals.gaming} minutes</p></label> */}
                    {/* <label  ><p>Web Browsing</p><input type="range" name="webBrowsing" value={formGoals.webBrowsing} onChange={handleChange} onMouseUp={handleChangeEnd} /><p>{weekMonth ? formGoals.webBrowsing * 31 : formGoals.webBrowsing} minutes</p></label> */}
                    {/* <label  ><p>Streaming</p><input type="range" name="streaming" value={formGoals.streaming} onChange={handleChange} onMouseUp={handleChangeEnd} /><p>{weekMonth ? formGoals.streaming * 31 : formGoals.streaming} minutes</p></label> */}
                </form>
                <img src="https://thedailyaztec.com/wp-content/uploads/2020/04/Untitled_Artwork-1-675x900.png" alt="Screen Time" />

            </div>
        </DashboarView>
    )
}

export default Goals