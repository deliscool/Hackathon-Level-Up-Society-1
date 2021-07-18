import React, { useState } from "react"
import SwagCard from "./SwagCard"
import DashboarView from "../DashboardView"
import "../../App.css"

const AvatarShop = () => {
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
                            width: "454px",
                        }}>
                        More Coming Soon...
                    </h1>
                </div>
            </div>
        </DashboarView>
    )
}

export default AvatarShop
