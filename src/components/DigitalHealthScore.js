import React, { useState, useEffect, useContext } from "react"
import { useLocation } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import { DigiHealthContext } from "../context/ContextProvider"
import DashboarView from "./DashboardView"
import perfect from "../img/perfect.svg"
import worried from "../img/worried.svg"
import mummy from "../img/mummy.svg"
import zombie from "../img/zombie.svg"
import "@patternfly/react-core/dist/styles/base.css"
import {
    ChartDonut,
    ChartThemeColor,
} from "@patternfly/react-charts"

const DigitalHealthScore = props => {
    const feels = [perfect, worried, mummy, zombie]
    const currentPage = useLocation()
    const [currentMood] = useState( 0 )
    const { setCurrentView } = useContext( DigiHealthContext )
    const { user, setUser } = useContext( UserContext )
    const [formGoals, setFormGoals] = useState( {
        social: 45,
        productivity: 45,
        finance: 45,
        entertainment: 45,
    } )

    useEffect( () => {
        setCurrentView( currentPage )
    }, [] )


    return (
        <DashboarView pagetitle="Digital Health Score">
            <div className="digiHealthScorePage">
                <div
                    className="chart-container" id="actualChart">
                    <ChartDonut
                        data={[
                            { x: "Social", y: user.actuals.social },
                            {
                                x: "Entertainment",
                                y: user.actuals.entertainment,
                            },
                            { x: "Finance", y: user.actuals.finance },
                            { x: "Productivity", y: user.actuals.productivity },
                        ]}
                        themeColor={ChartThemeColor.multiOrdered}
                        legendPosition="right"
                        legendOrientation="vertical"
                        height={500}
                        width={600}
                        radius={205}
                        innerRadius={180}
                    />
                </div>
                <div
                    className="chart-container" id="goalChart">
                    <ChartDonut
                        className="goalChart"
                        data={[
                            { x: "Social", y: user.goals.social },
                            { x: "Entertainment", y: user.goals.entertainment },
                            { x: "Finance", y: user.goals.finance },
                            { x: "Productivity", y: user.goals.productivity },
                        ]}
                        themeColor={ChartThemeColor.multiOrdered}
                        legendPosition="right"
                        legendOrientation="vertical"
                        height={500}
                        width={600}
                        radius={235}
                        innerRadius={210}
                    />
                </div>
                <img id="digiHealthScoreAvatar"
                    src={feels[currentMood]}
                    alt="Avatar"
                />

            </div>
            <div className="securityHealthBar" />
        </DashboarView>
    )
}

export default DigitalHealthScore
