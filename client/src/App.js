import './App.css';
// import { useState, useEffect } from 'react';
import Movies from "./Movies";

function App() {
    

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);
  return (
    <div className="App">
      <Movies />
    </div>
  );
}

export default App;
