import React, { useState, createContext } from "react"
import users from './users'

const UserContext = createContext()
const UserContextProvider = props => {
    const initUser = {
        name: "isLoggedOut",
        password: "password", // for demo purposes only
        totalScreenTime: 436,
        totalSitesPerDay: 17,
        totalDigitalIds: 9,
        mostTimeSpent: "StackOverflow",
        moneySpent: 240,
        goals: {
            socialMedia: 45,
            productivity: 45,
            gaming: 45,
            webBrowsing: 45,
            streaming: 45,
        },
    }


    const [user, setUser] = useState( users[0] )

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }
