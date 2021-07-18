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


    const checkUserGoals2Actual = () => {
        const socialRatio = Number( user.goals.social ) - Number( user.actuals.social )
        const productivityRatio = Number( user.goals.productivity ) - Number( user.actuals.productivity )
        const financeRatio = Number( user.goals.finance ) - Number( user.actuals.finance )
        const entertainmentRatio = Number( user.goals.entertainment ) - Number( user.actuals.entertainment )
        return (
            ( socialRatio + productivityRatio + financeRatio + entertainmentRatio ) / 4
        )
    }



    const [user, setUser] = useState( users[0] )

    return (
        <UserContext.Provider value={{ user, setUser, checkUserGoals2Actual }}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }
