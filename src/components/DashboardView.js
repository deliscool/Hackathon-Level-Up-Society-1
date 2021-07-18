import React from "react"
const DashboarView = props => {
    return (
        <div
            style={{
                maxWidth: "80vw",
                height: "100vh",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
            }}>
            <h1
                style={{
                    height: "65px",
                    width: "80vw",
                    textAlign: "center",
                    marginTop: "3vh",
                }}>
                {props.pagetitle}
            </h1>
            <div
                style={{
                    width: "80vw",
                    height: "fit-content",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                {props.children}
            </div>
        </div>
    )
}

export default DashboarView
