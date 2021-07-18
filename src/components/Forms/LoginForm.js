import React, { useContext, useState } from "react"
// import { useHistory, useLocation } from "react-router"
import { DigiHealthContext } from "../../context/ContextProvider"

import Header from "../Header"
import "./Forms.css"

function LoginForm( props ) {

    const { handleSubmit, handleChange, login, errAuth, setErrAuth } = useContext( DigiHealthContext )
    const [showPassword, setShowPassword] = useState( false )


    return (
        <main>
            <div className="mainContent">
                <div className="form-container-wrapper">
                    <Header />
                    <div className="form-container">
                        <form className="form" onSubmit={( handleSubmit )}>
                            <h3 style={{ marginBottom: "8px" }}>Login</h3>
                            <label className="label-names" for="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={login.username}
                                placeholder={"Input username"}
                                onChange={handleChange}
                                style={{
                                    border: errAuth ? "2px solid #FF5B5B" : "auto"
                                }}
                            />
                            <label className="label-names" for="password">Password
                                <span
                                    style={{
                                        justifySelf: 'flex-end',
                                        marginLeft: "16px",
                                        color: "green",
                                        textAlign: "right",
                                    }}
                                    onClick={() =>
                                        setShowPassword( !showPassword )
                                    }
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </span></label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={login.password}
                                placeholder="Input password"
                                onChange={handleChange}
                                style={{
                                    border: errAuth ? "2px solid #FF5B5B" : "auto"
                                }}
                            />
                            <label for="remember password">
                                <input
                                    type="checkbox"
                                    name="remember password" style={{ marginRight: "8px" }}
                                />Remember Password
                            </label>
                            <div className="btn-container" style={{ margin: "16px" }}>
                                <button style={{ color: "white" }} type="submit">Login</button>
                                {props.altpath}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LoginForm