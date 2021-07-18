import React, { useContext, useState } from "react"
import { DigiHealthContext } from "../../context/ContextProvider"
import { Link } from "react-router-dom"
import Header from "../Header"
import "./Forms.css"



function SignUpForm( props ) {
    const { signUp, handleSubmit, handleChange } = useContext( DigiHealthContext )
    const [showPassword, setShowPassword] = useState( false )

    return (
        <main>
            <div className="mainContent">
                <div className="form-container-wrapper">
                    <Header />
                    <div className="form-container">
                        <form className="form" onSubmit={e => {
                            console.log( "data was submitted" )
                            handleSubmit( e )
                        }}>
                            <h3 style={{ marginBottom: "8px" }}>Sign Up</h3>
                            <label className="label-names" for="username">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={signUp.name}
                                placeholder={"Input name"}
                                onChange={handleChange}
                            />
                            <label className="label-names" for="email">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={signUp.email}
                                placeholder="Input email"
                                onChange={handleChange}
                            />
                            <label
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                                className="label- names"
                                for="password"
                            >
                                Password{" "}
                                <span
                                    style={{
                                        marginLeft: "16px",
                                        color: "green",
                                        textAlign: "right",
                                    }}
                                    onClick={() =>
                                        setShowPassword( !showPassword )
                                    }
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </span>
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={signUp.password}
                                placeholder="Input password"
                                onChange={handleChange}
                            />
                            <label for="remember password">
                                <input
                                    type="checkbox"
                                    name="remember password"
                                    style={{ marginRight: "8px" }}

                                />
                                I agree to the terms of service.
                            </label>
                            <div className="btn-container" style={{ marginTop: "16px" }}>
                                <button style={{ color: "white" }} type="submit">Sign Up</button>
                                {props.altpath}
                            </div>
                            <Link to="/digitalhealthscore" style={{ marginTop: "16px" }}><p className="guest-login">Continue as guest</p></Link>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SignUpForm
