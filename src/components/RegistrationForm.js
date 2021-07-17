import React, { useContext } from "react"
import { DigiHealthContext } from "../context/ContextProvider"
import Header from "./Header"
import "../Forms.css"



function RegistrationForm() {
    const { signUp, handleSubmit, handleChange } = useContext( DigiHealthContext )

    return (
        <div className="form-container-wrapper">
            <Header />
            <div className="form-container">
                <form className="form" onSubmit={e => {
                    console.log( "data was submitted" )
                    handleSubmit( e )
                }}>
                    <h2>Registration</h2>
                    <label className="label-names" for="username">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={signUp.name}
                        placeholder={"Input name"}
                        onChange={handleChange}
                    />
                    <label className="label-names" for="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={signUp.email}
                        placeholder="Input email"
                        onChange={handleChange}
                    />
                    <label className="label-names" for="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={signUp.password}
                        placeholder="Input password"
                        onChange={handleChange}
                    />
                    <label for="remember password">
                        <input
                            type="checkbox"
                            name="remember password"
                        />I agree to the terms of service.
                    </label>
                    <div className="btn-container">
                        <button type="submit">Register</button>
                        <button id="btn-login" type="submit">Login</button>
                    </div>
                    <p>Continue as guest</p>
                </form>
            </div>
        </div>
    )
}

export default RegistrationForm