import React, { useState, useContext } from "react"
// import { useHistory, useLocation, Redirect } from "react-router-dom"
import { createBrowserHistory } from "history"
import users from "./users"
import { UserContext } from "./UserContext"
const DigiHealthContext = React.createContext()

function DigiHealthContextProvider( props ) {
    // const history = useHistory()
    const history = createBrowserHistory()
    const { setUser } = useContext( UserContext )
    const [currentView, setCurrentView] = useState( "/" )
    const [errAuth, setErrAuth] = useState( false )

    const [login, setLogin] = useState( {
        username: "",
        password: "",
    } )
    const [signUp, setSignUp] = useState( {
        name: "",
        email: "",
        password: "",
    } )

    const [openModal, setOpenModal] = useState( true )

    const handleChange = e => {
        const { name, value } = e.target
        setLogin( { ...login, [name]: value } )
        setSignUp( { ...signUp, [name]: value } )
    }
    const closeModal = () => {
        setOpenModal( false )
    }

    const handleSubmit = e => {
        e.preventDefault()
        const result = users.find(
            authenticatingUser =>
                authenticatingUser.name.toLowerCase() ===
                login.username.toLowerCase()
        )
        console.log( result )
        result.password === login.password
            ? setUser( result ) &&
            history.push( '/goals', { from: 'login' } )
            : setErrAuth( true )
    }
    return (
        <DigiHealthContext.Provider value={{ history, login, signUp, errAuth, openModal, handleSubmit, closeModal, handleChange, currentView, setCurrentView }}>
            {props.children}
        </DigiHealthContext.Provider>
    )
}

export { DigiHealthContext, DigiHealthContextProvider }
