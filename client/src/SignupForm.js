import React from "react";

function SignupForm([onSignupChange, onSignupSubmit]){
    return (
        <div>
            <h1>Flat-Tomatoes</h1>
            <form onSubmit={onSignupSubmit}>
                <label htmlFor="username-signup">Username:</label>
                <input id="username-signup" type="text" placeholder="Username" onChange={onSignupChange}/>
                <label htmlFor="email-signup">E-mail:</label>
                <input id="email-signup" type="text" placeholder="E-mail" onChange={onSignupChange}/>
                <label htmlFor="password-signup">Password:</label>
                <input id="password-signup" type="text" placeholder="Password" onChange={onSignupChange}/>
                <input id="submit-button" type="submit"/>
            </form>
        </div>
    )
}

export default SignupForm;