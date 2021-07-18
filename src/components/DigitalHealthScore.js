import React, { useState, useEffect, useContext } from "react"
import { useLocation } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import { DigiHealthContext } from "../context/ContextProvider"
import DashboarView from "./DashboardView"
import perfect from "../img/perfect.svg"
import worried from "../img/worried.svg"
import mummy from "../img/mummy.svg"
import zombie from "../img/zombie.svg"
import coin from "../img/coin.svg"
import "@patternfly/react-core/dist/styles/base.css"
import { ChartDonut, ChartThemeColor } from "@patternfly/react-charts"

const DigitalHealthScore = props => {
    const feels = [perfect, worried, mummy, zombie]
    const currentPage = useLocation()
    const [currentMood, setCurrentMood] = useState( 0 )
    const { setCurrentView } = useContext( DigiHealthContext )
    const { user, setUser, checkUserGoals2Actual } = useContext( UserContext )
    const [currentRatio, setCurrentRatio] = useState( null )
    const [formGoals, setFormGoals] = useState( {
        social: 45,
        productivity: 45,
        finance: 45,
        entertainment: 45,
    } )

    useEffect( () => {
        setCurrentRatio( checkUserGoals2Actual() )
        setCurrentView( currentPage )
    }, [] )

    useEffect( () => {
        currentRatio >= -53
            ? setCurrentMood( 0 )
            : currentRatio < -53 && currentRatio >= -83
                ? setCurrentMood( 1 )
                : currentRatio < -83 && currentRatio >= -100
                    ? setCurrentMood( 2 )
                    : setCurrentMood( 3 )
    }, [currentRatio] )

    return (
        <DashboarView pagetitle="Digital Health Score">
            <div className="digiHealthScorePage">
                <div
                    className="chart-container pf-u-font-size-3xl
                    "
                    id="actualChart">
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
                <div className="chart-container" id="goalChart">
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
                <img
                    id="digiHealthScoreAvatar"
                    src={feels[currentMood]}
                    alt="Avatar"
                />
            </div>
            <div
                className="wallet"
                style={{
                    position: "fixed",
                    right: "50px",
                    top: "13px",
                    height: "150px",
                    width: "275px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: 'space-around',
                    padding: "auto 24px",
                    alignItems: "center",
                    border: "1px solid #00000030",
                    boxShadow: "2px 2px 9px #12121210",
                    borderRadius: "32px",
                }}>
                <h3>Coin Wallet</h3>
                <div style={{
                    display: "flex",
                    flexDirection: " row",
                    justifyContent: 'space-around',
                    padding: "auto 24px",
                    alignItems: "center",

                }}>
                    <img
                        src={coin}
                        alt="Coin"
                        style={{ height: "75px", width: "75px" }}
                    />
                    <h3 style={{ fontWeight: 400 }}>${user.coins}</h3>
                </div>
            </div>
            <h3>Security Score</h3>
            <div className="securityHealthBar" />
        </DashboarView>
    )
}

export default DigitalHealthScore
