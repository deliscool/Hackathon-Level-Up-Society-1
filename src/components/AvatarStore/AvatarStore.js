import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router'
import { UserContext, UserContextProvider } from '../../context/UserContext'
import { DigiHealthContext } from '../../context/ContextProvider'
import DashboarView from '../DashboardView'

const AvatarStore = props => {


    return (

        <DashboarView pagetitle="Avatar Store">
            <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "row" }}>

            </div>
            {props.children}
        </DashboarView>
    )
}

export default AvatarStore