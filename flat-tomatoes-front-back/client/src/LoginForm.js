import React from "react";
import "./loginform.css"

function LoginForm() {
    return (
    <div>
        <h1>Login</h1>
        <label htmlFor="username-input">Username:</label>
        <input id="username-input" type="text" placeholder="Username"/>
        <label htmlFor="password-input">Password:</label>
        <input id="password-input" type="password" placeholder="password"/>
    </div>
    )
}

export default LoginForm;