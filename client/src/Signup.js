export default function Signup({onSignup, updateSignupFormData}){
    //made by ella
    return (
        <form onSubmit={onSignup}>
            <h1>Sign Up:</h1>
            <label>Username: </label>
            <input type="text" name="name" onChange={updateSignupFormData}/><br/>
            <label>Email: </label>
            <input type="text" name="email" onChange={updateSignupFormData}/><br/>
            
            {/* Allow the user to enter a password into the signup form */}
            <label>Password: </label>
            <input type="text" name="password" onChange={updateSignupFormData}/><br/>
            <input type="submit"/>
        </form>
    )
}
