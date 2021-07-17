import React, { useState, useEffect, useContext } from 'react'
const DashboarView = props => {

    return (
        <div style={{ width: "100%", height: "100vh", backgroundColor: "white", display: "flex", flexDirection: "column" }}>
            <h1 style={{ height: "65px", width: "100%", textAlign: "center" }}>{props.pagetitle}</h1>
            <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                {props.children}
            </div>
        </div>
    )
}

export default DashboarView
