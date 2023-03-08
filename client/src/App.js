import './App.css';
import { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Movies from "./Movies";

function App() {
    // const [count, setCount] = useState(0);
    const [loginData, setLoginData] = useState({});
    const [signupData, setSignupData] = useState({});
    const [userData, setUserData] = useState({});

// Brendan: functions to handle the login
  function handleLoginChange(event){
    setLoginData({...loginData, [event.target.name]: event.target.value})
  }

  function handleLoginSubmit(event){
    event.preventDefault();
    const userLogin = async function() {
      const response = await fetch("/loginform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData)
      });
      if (response.ok) {
        response.json()
        .then(data => setUserData(data));
      } else {
        alert(`Error: ${response.status} ${response.statusText}`);
      }};
      userLogin();
  }

// Brendan: functions to handle the signup
  function handleSignupChange(event){
    setSignupData({...signupData, [event.target.name]: event.target.value})
  }

  function handleSignupSubmit(event){
    event.preventDefault();
    const userSignup = async function() {
      const response = await fetch("/signupform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData)
      });
      if (response.ok) {
        response.json()
        .then(userData => setUserData(userData));
      } else {
        alert(`Error: ${response.status} ${response.statusText}`);
      }};
      userSignup();
  }

  // Brendan: routes for the login, signup, and movies pages
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <LoginForm onLoginChange={handleLoginChange} onLoginSubmit={handleLoginSubmit} />
        </Route>
        <Route exact path="/signup">
          <SignupForm onSignupChange={handleSignupChange} onSignupSubmit={handleSignupSubmit} />
        </Route>
        <Route exact path="/">
          <Movies />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

