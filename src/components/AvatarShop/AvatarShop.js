import React, { useState, useContext } from "react"
import SwagCard from "./SwagCard"
import DashboarView from "../DashboardView"
import { UserContext } from "../../context/UserContext"
import "../../App.css"
import coin from "../../img/coin.svg"

const AvatarShop = () => {
    const { user, setUser } = useContext( UserContext )
    const [swagItems, setSwagItems] = useState( [
        {
            url: `./cowboyhat.png`,
            desc: "Hat",
            coin: "./DHCoin.png",
            price: "$25",
        },
        {
            url: `./spectacles.png`,
            desc: "Glasses",
            coin: "./DHCoin.png",
            price: "$20",
        },
        {
            url: `./necklace.png`,
            desc: "Necklace",
            coin: "./DHCoin.png",
            price: "$15",
        },
    ] )
    const swagComponent = swagItems.map( ( item, i ) => (
        <SwagCard
            key={i}
            index={item.i}
            itemImg={item.url}
            desc={item.desc}
            coin={item.coin}
            price={item.price}
        />
    ) )

    return (
        <DashboarView pagetitle="Avatar Shop">
            <div
                className="wallet"
                style={{
                    position: "fixed",
                    right: "50px",
                    top: "15px",
                    height: "130px",
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
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    padding: "64px",
                }}>
                <div className="avatarContainer">{swagComponent}</div>
                <div
                    style={{
                        width: "612px",
                        height: "216px",
                        background: "#f7ce46",
                        border: "1px solid #e2e8f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "3em auto",
                    }}>
                    <h1
                        style={{
                            fontFamily: "Inter",
                            fontStyle: "Italic",
                            fontWeight: "bold",
                            weight: "700",
                            size: "48px",
                            lineHeight: "56px",
                            width: "4em auto",
                        }}>
                        More Coming Soon...
                    </h1>
                </div>
            </div>

        </DashboarView>
    )
}

export default AvatarShop
