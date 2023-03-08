import React from "react";

function LoginForm([ onLoginChange, onLoginSubmit ]) {
    return (
    <div>
        <h1>Flat-Tomatoes</h1>
        <form onSubmit={onLoginSubmit}>
            <label htmlFor="username-input">Username:</label>
            <input id="username-input" type="text" placeholder="Username" onChange={onLoginChange}/>
            <label htmlFor="password-input">Password:</label>
            <input id="password-input" type="password" placeholder="password" onChange={onLoginChange}/>
            <input id="submit-button" type="submit" value="Login"/>
        </form>
    </div>
    )
}

export default LoginForm;