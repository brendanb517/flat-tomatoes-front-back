import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function App() {
    const [count, setCount] = useState(0);
    const [loginData, setLoginData] = useState({});
    const [signupData, setSignupData] = useState({});

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  function handleLoginSubmit(event){
    event.preventDefault();
    useEffect(async() => {
      const response = await fetch("/LoginForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData)
      });
      if (response.ok)

    })
  }

  function handleSignupSubmit(event){
    event.preventDefault();
    useEffect(async() => {
      const response = await fetch("/SignupForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData)
      });
      if (response.ok)

    })
  }

  return (
    <div className="App">
      <h1>Page Count: {count}</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
