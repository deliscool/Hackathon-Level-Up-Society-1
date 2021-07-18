import React, { useState, useEffect, useContext } from "react"
import { useLocation } from "react-router"
import { UserContext } from "../../context/UserContext"
import { DigiHealthContext } from "../../context/ContextProvider"
import DashboarView from "../DashboardView"
import target from "../../img/target.svg"
import "./Goals.css"

const Goals = props => {
    const currentPage = useLocation()
    const { setCurrentView } = useContext( DigiHealthContext )
    // const [weekMonth, setWeekMonth] = useState( false )
    const { user, setUser } = useContext( UserContext )
    const [formGoals, setFormGoals] = useState( user.goals )

    const handleChange = e => {
        const { name, value } = e.target
        setFormGoals( prevState => ( {
            ...prevState,
            [name]: value,
        } ) )
    }

    // const handleToggleChange = e => {
    //     const { name, value } = e.target
    //     setWeekMonth( !weekMonth )
    // }

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
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                }}>
                <form className="goalsForm" id="goalsForm">
                    <h3>Adjust Your Goals</h3>
                    <label>
                        <h5 className="rangeLabel">Social: </h5>
                        <input type="range"
                            min="0"
                            max="360"
                            step="10"
                            name="social"
                            id="socialSlider"
                            value={formGoals.social}
                            onChange={handleChange}
                            // onMouseUp={handleChangeEnd}
                            className="rangeSliders"
                            size="lg"
                            htmlFor="social"
                            tooltip="auto"
                            variant="primary"
                        />
                        <h5 className="rangeLabel">{user.goals.social} Minutes</h5>
                    </label>
                    <label>
                        <h5 className="rangeLabel">Productivity: </h5>
                        <input type="range"
                            min="0"
                            max="360"
                            step="10"
                            name="productivity"
                            id="productivitySlider"
                            value={formGoals.productivity}
                            onChange={handleChange}
                            onMouseUp={handleChangeEnd}
                            className="rangeSliders"
                            size="lg"
                            htmlFor="productivity"
                            tooltip="auto"
                            variant="success"
                        />
                        <h5 className="rangeLabel">{user.goals.productivity} Minutes</h5>
                    </label>
                    <label>
                        <h5 className="rangeLabel">Finance: </h5>
                        <input type="range"
                            min="0"
                            max="360"
                            step="10"
                            name="finance"
                            id="financeSlider"
                            value={formGoals.finance}
                            onChange={handleChange}
                            onMouseUp={handleChangeEnd}
                            className="rangeSliders"
                            size="lg"
                            htmlFor="finance"
                            tooltip="auto"
                            variant="danger"
                        />
                        <h5 className="rangeLabel">{user.goals.finance} Minutes</h5>
                    </label>
                    <label>
                        <h5 className="rangeLabel">Entertainment: </h5>
                        <input type="range"
                            min="0"
                            max="360"
                            step="10"
                            name="entertainment"
                            id="entertainmentSlider"
                            value={formGoals.entertainment}
                            onChange={handleChange}
                            onMouseUp={handleChangeEnd}
                            className="rangeSliders"
                            size="lg"
                            htmlFor="entertainment"
                            tooltip="auto"
                            variant="warning"
                        />
                        <h5 className="rangeLabel">{user.goals.entertainment} Minutes</h5>
                    </label>
                </form>
                <img
                    style={{ width: "400px", height: "400px", position: "relative", top: "275px", right: "175px", zIndex: "0" }}
                    src={target}
                    alt="Target"
                />
            </div>
        </DashboarView>
    )
}

export default Goals
