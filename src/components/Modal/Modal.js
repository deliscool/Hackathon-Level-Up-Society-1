import React, { useContext } from "react"
import { DigiHealthContext } from "../../context/ContextProvider"
import "../../App.css"

const modalStyle = {
  width: "100vw",
  height: "100vh",
  background: "#ffffff",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  margin: "0 auto",
  position: "relative"
}
const closeModalStyle = {
  position: "absolute",
  top: "0",
  right: "0",
  margin: "0",
  color: "black",
  background: "none",
  border: "none",
  fontSize: "3em"
}
function Modal( props ) {
  const { closeModal } = useContext( DigiHealthContext )
  return (

    <div className="modalBackground" style={{ width: "100%", height: "100vh" }}>
      <div className="modalContainer" style={modalStyle}>
        <button style={closeModalStyle} onClick={() => {
          return console.log( "button clicked" )
        }}> X </button>
        <h1 className="welcomeModal">Welcome to</h1>
        <h1 className="logoModal">DigiHealth</h1>
        <h3 style={{ color: "#059669" }}>Optimize your digital well-being</h3>
        <h3>🎯Set Goals</h3>
        <h3>👀 Visualize your digital behavior</h3>
        <h3>‍⚖Balance your tech life</h3>
        <h3>💪 Strengthen your digital footprint</h3>
        <div className="welcomeAvatar">
          <img src="./Happy 2.png"></img>
        </div>
        {props.altpath}
      </div>
    </div>
  )
}

export default Modal