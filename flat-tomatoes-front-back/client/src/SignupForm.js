import React from "react";
import "./signupform.css"

function SignupForm([onSignupSubmit]){
    return (
        <div>
            <h1>Flat-Tomatoes</h1>
            <form onSubmit={onSignupSubmit}>
                <label htmlFor="username-signup">Username:</label>
                <input id="username-signup" type="text" placeholder="Username"/>
                <label htmlFor="email-signup">E-mail:</label>
                <input id="email-signup" type="text" placeholder="E-mail"/>
                <label htmlFor="password-signup">Password:</label>
                <input id="password-signup" type="text" placeholder="Password"/>
                <input id="submit-button" type="submit"/>
            </form>
        </div>
    )
}

export default SignupForm;