import React, { useState, createContext } from "react"

const UserContext = createContext()
const UserContextProvider = props => {
    const initUser = {
        name: "Guest",
        totalScreenTime: 436,
        totalSitesPerDay: 17,
        totalDigitalIds: 9,
        mostTimeSpent: "instagram",
        moneySpent: 240,
        goals: {
            socialMedia: 45,
            productivity: 45,
            gaming: 45,
            webBrowsing: 45,
            streaming: 45,
        },
    }
    const [user, setUser] = useState( initUser )

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }
