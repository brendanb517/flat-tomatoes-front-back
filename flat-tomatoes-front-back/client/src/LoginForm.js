import React from "react";
import "./loginform.css"

function LoginForm([onLoginSubmit]) {
    return (
    <div>
        <h1>Flat Tomatoes</h1>
        <form onSubmit={onLoginSubmit}>
            <label htmlFor="username-input">Username:</label>
            <input id="username-input" type="text" placeholder="Username"/>
            <label htmlFor="password-input">Password:</label>
            <input id="password-input" type="password" placeholder="password"/>
            <input id="submit-button" type="submit" value="Login"/>
        </form>
    </div>
    )
}

export default LoginForm;