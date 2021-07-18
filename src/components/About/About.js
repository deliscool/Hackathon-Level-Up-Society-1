import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router'
import { UserContext, UserContextProvider } from '../../context/UserContext'
import { DigiHealthContext } from '../../context/ContextProvider'
import DashboarView from '../DashboardView'
import delpic from "../../img/del.svg"
import marcuspic from "../../img/marcus.svg"
import yongpic from "../../img/yong.svg"
import gabepic from "../../img/gabe.svg"

const About = props => {


    return (

        <DashboarView pagetitle="Meet V Team">
            <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
                <p style={{ width: "40vw", textAlign: "center", margin: "64px auto" }}>A group of collegues who met during our time at <a href="https://vschool.io/">V School</a>, a remote bootcamp for developers and designers</p>
                <div className="pictureContainer">
                    <a href="https://www.linkedin.com/in/liza-del-yarisantos/">
                        <img src={delpic} alt="Del Yarisantos" id="delPic" />
                    </a>
                    <a href="https://www.linkedin.com/in/marcusradder/">
                        <img src={marcuspic} alt="Marcus Radder" id="marcusPic" />
                    </a>
                    <a href="https://www.linkedin.com/in/yong-cho-dev/">
                        <img src={yongpic} alt="Yong Cho" id="yongPic" />
                    </a>
                    <a href="https://www.linkedin.com/in/gabemarchant/"><img src={gabepic} alt="Gabe Marchant" id="gabePic" /></a>
                </div>
                <h1 style={{ width: "40vw", textAlign: "center", margin: "96px auto 32px auto", color: "#000000" }}>Our Mission:</h1>
                <h1 style={{ width: "40vw", textAlign: "center", margin: "0px auto 32px auto", color: "#1D4ED8" }}>Improve Digital Well-Being</h1>
            </div>
            {props.children}
        </DashboarView>
    )
}

export default About