import React, { useState, createContext } from "react"
import users from './users'

const UserContext = createContext()
const UserContextProvider = props => {


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
