import React, { useState, useEffect, useContext } from "react"
import { useLocation } from "react-router-dom"
import { UserContext, UserContextProvider } from "../context/UserContext"
import { DigiHealthContext } from "../context/ContextProvider"
import DashboarView from "./DashboardView"
import happy from "../img/happy.svg"
import groggy from "../img/groggy.svg"
import perfect from "../img/perfect.svg"
import worried from "../img/worried.svg"
import sick from "../img/sick.svg"
import mummy from "../img/mummy.svg"
import zombie from "../img/zombie.svg"
import skull from "../img/skull.svg"
import ApexCharts from 'apexcharts'
import MyResponsivePie from "./PieChart"
import { Overlay } from "react-bootstrap/Overlay"


const DigitalHealthScore = props => {


    const feels = [happy, groggy, mummy, zombie]
    const currentPage = useLocation()
    const [currentMood, setCurrentMood] = useState( 0 )
    const { currentView, setCurrentView } = useContext( DigiHealthContext )
    const [focusedRing, setFocusedRing] = useState( "" )
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
            [name]: value,
        } ) )
    }

    const handleChangeEnd = e => {
        setUser( prevState => ( {
            ...prevState,
            goals: formGoals,
        } ) )
    }

    const handleBlur = e => {
        const targetRing = e.target.getAttribute( "className" )
        const activeChange = document.getElementsByClassName( targetRing )
        e.target.style.boxShadow = "none"
    }
    const handleFocus = e => {
        const targetRing = e.target.getAttribute( "className" )
        const activeChange = document.getElementsByClassName( targetRing )
        e.target.style.boxShadow = "1px 1px 3px 5px #121212"
    }

    useEffect( () => {
        setCurrentView( currentPage )
    }, [] )
    return (
        <DashboarView pagetitle="Digital Health Score">
            <MyResponsivePie />
            {/* <div
                style={{
                    height: "85vh",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                <div
                    className="fifthRing"
                    onMouseOver={handleFocus}
                    onMouseLeave={handleBlur}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "fit-content",
                        height: "fit-content",
                        padding: " 32px",
                        transform: "rotate(37deg)",
                        borderRadius: "50%",
                        border: "4px solid #00000080",
                        background: "conic-gradient(white 0deg, #F35B04 90deg)",
                    }}>
                    <div
                        className="fourthRing"
                        onMouseOver={handleFocus}
                        onMouseLeave={handleBlur}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "fit-content",
                            height: "fit-content",
                            padding: " 32px",
                            borderRadius: "50%",
                            border: "4px solid #00000080",
                            background: "conic-gradient(white 90deg, #F18701 340deg)",
                        }}>
                        <div
                            className="thirdRing"
                            onMouseOver={handleFocus}
                            onMouseLeave={handleBlur}
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "fit-content",
                                height: "fit-content",
                                padding: " 32px",
                                borderRadius: "50%",
                                border: "4px solid #00000080",
                                background: "conic-gradient(white 90deg, #F7B801 360deg)",
                            }}>
                            <div
                                className="secondRing"
                                onMouseOver={handleFocus}
                                onMouseLeave={handleBlur}
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "fit-content",
                                    height: "fit-content",
                                    padding: " 32px",
                                    borderRadius: "50%",
                                    border: "4px solid #00000080",
                                    background: "conic-gradient(white 90deg, #7678ED 170deg)",
                                }}>
                                <div
                                    className="firstRing"
                                    onMouseOver={handleFocus}
                                    onMouseLeave={handleBlur}
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "fit-content",
                                        height: "fit-content",
                                        padding: " 32px",
                                        borderRadius: "50%",
                                        border: "4px solid #00000080",
                                        background: "conic-gradient(white 090deg, #3D348B 170deg)",
                                    }}>
                                    <img
                                        style={{
                                            height: "25vh",
                                            width: "auto",
                                            margin: "auto",
                                            transform: "rotate(-37deg)",
                                            borderRadius: "50%",
                                        }} alt="Avatar"
                                        onMouseOver={( e ) => e.target.style.boxShadow = "none"}
                                        onMouseLeave={( e ) => e.target.style.boxShadow = "none"}
                                        src={feels[currentMood]}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            <div style={{ display: "flex", flexDirection: "row", marginTop: "48px" }}>
                <button
                    onClick={() =>
                        setCurrentMood( prevState =>
                            prevState >= 1 ? prevState - 1 : currentMood
                        )
                    }>
                    Improve Mood
                </button>
                <button
                    onClick={() =>
                        setCurrentMood( prevState =>
                            prevState < feels.length - 1
                                ? prevState + 1
                                : currentMood
                        )
                    }>
                    Worsen Mood
                </button>
            </div>
            {/* </div> */}

        </DashboarView >
    )
}

export default DigitalHealthScore
