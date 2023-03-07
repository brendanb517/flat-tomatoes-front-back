import React, { useState } from "react";

export default function AddMovie ({onAddMovie}) {
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [plot, setPlot] = useState("");
    const [genre, setGenre] = useState("");

function handleSubmit (e) {
  e.preventDefault();
  fetch("/movies" , {
    method: "POST",
    headers: {
      "Content-Type": "applicaiton/json",
    },
    body: JSON.stringify({
      name: name,
      year: year,
      plot: plot,
      genre: genre,
    }),
  })
  .then(r=> r.json())
  .then((newMovie) => onAddMovie(newMovie))
}
    return (
    <div className="new-movie-form">
      <h2>Add a Movie</h2>
      <form onSubmit = {handleSubmit}>
        <input 
        type="text" 
        name="name" 
        placeholder="Movie name"
        value = {name}
        onChange={(e) => setName(e.target.value)}
         />
        <input 
        type="number" 
        name="year" 
        placeholder="year released"
        value = {year}
        onChange={(e) => setYear(e.target.value)}
        />
        <input 
        type="text" 
        name="plot" 
        placeholder="Plot description"
        value = {plot}
        onChange={(e) => setPlot(e.target.value)}
         />
         <input 
        type="text" 
        name="genre" 
        placeholder="Genre"
        value = {genre}
        onChange={(e) => setGenre(e.target.value)}
         />
        <button type="submit">Submit Movie</button>
        </form>
        </div>

    )
}