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
        actuals: {
            social: 145,
            productivity: 45,
            finance: 345,
            entertainment: 45,
        },
        goals: {
            social: 45,
            productivity: 45,
            finance: 45,
            entertainment: 45,
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
