import React, {useState} from "react";
import "./loginform.css"

function LoginForm() {
    const [userInfo, setUserInfo] = useState([]);
    const username = document.getElementById("username-input");
    const password = document.getElementById("password-input");
    function handleSubmit(){
        setUserInfo([username.value, password.value]);
    }

    return (
    <div>
        <h1>Flat Tomatoes</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username-input">Username:</label>
            <input id="username-input" type="text" placeholder="Username"/>
            <label htmlFor="password-input">Password:</label>
            <input id="password-input" type="password" placeholder="password"/>
            <input type="submit" value="Login"/>
        </form>
    </div>
    )
}

export default LoginForm;