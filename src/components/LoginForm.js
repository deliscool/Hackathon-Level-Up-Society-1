import React, { useContext } from "react"
import {DigiHealthContext} from "../contexts/ContextProvider"
import Header from "./Header"
import "../Forms.css"

function LoginForm(props) {

    const {handleSubmit, handleChange, login} = useContext(DigiHealthContext)

    return (
        <div className="form-container-wrapper">
            <Header />
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <label className="label-names" for="username">Username</label>
                    <input
                    type="text"
                    name="username"
                    value={login.username}
                    placeholder={"Input username"}
                    onChange={handleChange}
                    />
                    <label className="label-names" for="password">Password</label>
                    <input
                    type="password"
                    name="password"
                    value={login.password}
                    placeholder="Input password"
                    onChange={handleChange}
                    />
                    <label for="remember password">
                    <input
                    type="checkbox"
                    name="remember password"
                    />Remember Password
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm