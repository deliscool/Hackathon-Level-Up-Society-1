import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router'
import { UserContext, UserContextProvider } from '../../context/UserContext'
import { DigiHealthContext } from '../../context/ContextProvider'
import DashboarView from '../DashboardView'
import users from '../../context/users';

const Configure = props => {
    const { currentView, setCurrentView } = useContext( DigiHealthContext )
    const { user, setUser } = useContext( UserContext )

    const handleClick = e => {
        const button = e.target
        const name = button.getAttribute( "id" )
        const selectedUser = users.filter(
            person =>
                person.name.toLocaleLowerCase() === name.toLocaleLowerCase()
        )
        setUser( ...selectedUser )
        console.log( name )
    }


    return (

        <DashboarView pagetitle="Configure">
            <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "row" }}>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                        // backgroundImage:
                        // "linear-gradient(to right, #00dbde 0%, #fc00ff 100%)",
                        borderRadius: "20px",
                    }}>
                    {props.altpath}
                    <button className="smallButton" id="guest" onClick={handleClick}>
                        Guest
                    </button>
                    <button className="smallButton" id="jane" onClick={handleClick}>
                        Jane
                    </button>
                    <button className="smallButton" id="joseph" onClick={handleClick}>
                        Joseph
                    </button>
                </div>


            </div>
            {props.children}
        </DashboarView>
    )
}

export default Configure