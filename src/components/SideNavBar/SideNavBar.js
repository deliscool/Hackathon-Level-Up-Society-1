import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import { DigiHealthContext } from "../../context/ContextProvider"
import "./SideNavBar.css"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css" // optional

const SideNavBar = props => {
    const { currentView } = useContext( DigiHealthContext )
    const { user } = useContext( UserContext )

    // const handleClick = e => {
    //     const button = e.target
    //     const name = button.getAttribute( "id" )
    //     const selectedUser = users.filter(
    //         person =>
    //             person.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    //     )
    //     setUser( ...selectedUser )
    //     console.log( name )
    // }

    return (
        <nav className="sideNavBar">
            <h1 className="digihealth">DigiHealth</h1>

            <div className="greetingBox">
                <h4>Welcome</h4>
                <h3 className="userName">{user.name}</h3>
            </div>
            <div className="statsContainer">
                <Tippy
                    content={
                        <span>
                            Total Screen Time: How many hours spent online
                        </span>
                    }
                    theme="digihealth"
                    placement="right"
                    delay="205"
                    animation="scale-subtle">
                    <div className="statsRow">
                        <i class="far fa-clock"></i>
                        <h5>{user.totalScreenTime} hrs.</h5>
                    </div>
                </Tippy>
                <Tippy
                    content={
                        <span>
                            Total Sites Per Day: How many sites you vistit per
                            day
                        </span>
                    }
                    theme="digihealth"

                    placement="right"
                    delay="205"
                    animation="scale-subtle">
                    <div className="statsRow">
                        <i class="far fa-browser"></i>
                        <h5>{user.totalSitesPerDay} Sites</h5>
                    </div>
                </Tippy>
                <Tippy
                    content={
                        <span>
                            Total Digital IDs: How many logins you have online
                        </span>
                    }
                    theme="digihealth"

                    placement="right"
                    delay="205"
                    animation="scale-subtle">
                    <div className="statsRow">
                        <i class="far fa-user"></i>
                        <h5>{user.totalDigitalIds} IDs</h5>
                    </div>
                </Tippy>
                <Tippy
                    content={
                        <span>
                            Most Time Spent: Which site you spend the most time
                            on
                        </span>
                    }
                    theme="digihealth"

                    placement="right"
                    delay="205"
                    animation="scale-subtle">
                    <div className="statsRow">
                        <i class="far fa-bookmark"></i>
                        <h5>{user.mostTimeSpent}</h5>
                    </div>
                </Tippy>
                <Tippy
                    content={
                        <span>
                            Money Spent: Which site you spend the most money on
                        </span>
                    }
                    theme="digihealth"

                    placement="right"
                    delay="205"
                    animation="scale-subtle">
                    <div className="statsRow">
                        <i class="far fa-shopping-cart"></i>
                        <h5>{user.moneySpent}</h5>{" "}
                    </div>
                </Tippy>
                <div className="statsRow"></div>
                <div className="statsRow"></div>
                <div className="statsRow"></div>
                <div className="statsRow"></div>
            </div>
            {props.children}
            <div className="navButtonGroup">
                <Link
                    to={
                        currentView.pathname === "/goals"
                            ? "/digitalhealthscore"
                            : "/goals"
                    }>
                    <button className="largeButton">
                        {currentView.pathname === "/goals"
                            ? "Back to Dashboard"
                            : "Goals"}
                    </button>
                </Link>
                <Link
                    to={
                        currentView.pathname === "/avatarshop"
                            ? "/digitalhealthscore"
                            : "/avatarshop"
                    }>
                    <button className="smallButton" id="avatarShopButton">
                        {currentView.pathname === "/avatarshop"
                            ? "Back to Dashboard"
                            : "Avatar Shop"}
                    </button>
                </Link>
            </div>
            <Link to="/about">
                <p className="about">About us</p>
            </Link>
        </nav>
    )
}

export default SideNavBar
