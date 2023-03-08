import './App.css';
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from 'react';
//testing with signupElla
import MovieList from './MovieList';
import Signup from "./Signup"
import Login from './Login';
import NavBar from './NavBar';
import LoggedOutNavBar from './LoggedOutNavBar';
import AddComment from './AddComment';
//import UpdateComment from './UpdateComment';

function App() {

  //added by ella
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(null)
  const [loginFormData, setLoginFormData] = useState({})
  const [signupFormData, setSignupFormData] = useState({})

//ella moved from Movies.js
useEffect( () => {
    fetch('http://127.0.0.1:3000/movies')
    .then(res=>res.json())
    .then(movieData => setMovies(movieData))
},[])

//added by ella. Handle user login.
function onLogin(event){
    event.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginFormData)
    })
    .then(response => {
      if(response.ok){
        response.json().then(userData => setUser(userData))
      }
      else if(response.status === 401){
        alert("Error: Invalid username or password! Please try again!")
      }
      else{
        alert(`Error: ${response.status} ${response.statusText}`)
      }
    })
  }

  // Check if user is currently logged in
  useEffect(() => {
    fetch("/me")
    .then(response => {
      if(response.ok){
        response.json().then(userData => setUser(userData))
      }
    })
  }, [])

  function updateLoginFormData(event){
    setLoginFormData({...loginFormData, [event.target.name]: event.target.value})
  }

  function onLogout(){
    fetch("/logout", {
      method: "DELETE"
    })
    .then(response => {
      if(response.ok){
        setUser(null)
      }
    })
  }

   //added by ella
  function updateSignupFormData(event){
    setSignupFormData({...signupFormData, [event.target.name]: event.target.value})
  }

  //added by ella
  function onSignup(event){
    event.preventDefault()
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(signupFormData)
    })
    .then(response => {
      if(response.ok){
        response.json().then(userData => setUser([...user, userData]))
      }
      else if(response.status === 422){
        alert("Error: Username already exists or invalid Username! Please try again!")
      }
      else{
        alert(`Error: ${response.status} ${response.statusText}`)
      }
    })
  }
    


  return (
    //added by ella (copied from )
      <div className="App">
      <header className="App-header">
        {
          user ?
          <>
            <NavBar />
            <button onClick={onLogout}>Log Out</button>
            {`Welcome ${user.username}!`}
            <br/>
          </> :
          <LoggedOutNavBar/>
        }
        <Switch>
          <Route exact path="/">
            <h1>WELCOME TO Flat Tomatoes!</h1>
          </Route>
          <Route path="/login">
            {
              user ?
              null : 
              <Login onLogin={onLogin} updateLoginFormData={updateLoginFormData}/>
            }
          </Route>
          <Route path="/signup">
            {
              user ?
              "Please log out before signing up for an account" :
              <Signup onSignup={onSignup} updateSignupFormData={updateSignupFormData} />
            }
          </Route>
          <Route path="/movies">
            {user ? <MovieList movies={movies} /> : "Please log in to view movies"}
          </Route>
          <Route path="/create_movie">
            {user ? <AddComment /> : "Please log in to add a comment to a movie"}
          </Route>
          {/*<Route path="/update_comment">
            {user ? <UpdateComment /> : "Please log in to update a comment"}
          </Route>*/}
        </Switch>
      </header>
    </div>

  );
}

export default App;

