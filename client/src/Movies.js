import { useEffect, useState } from "react";

export default function Movies () {
    const [movieList, setMovieList] = useState({});
    const [movieTwo, setMovieTwo] = useState({});
    const apiKey = "78cabf98";
    const imdbKey = "i=tt3896198";
    const titleKey = "t=Everything+Everywhere+All+At+Once&y=2022";

    //search by imdbKey
useEffect( () => {
    fetch(`http://www.omdbapi.com/?${imdbKey}&apikey=${apiKey}`)
    .then(res=>res.json())
    .then(movieData => setMovieList(movieData))
},[])

//search by movieTitle and year
useEffect( () => {
    fetch(`http://www.omdbapi.com/?${titleKey}&apikey=${apiKey}`)
    .then(res=>res.json())
    .then(movieData => setMovieTwo(movieData))
},[])

const moviePosterTwo = movieTwo.Poster

const moviePoster = movieList.Poster
    
 

    return (
        <>
       <div className="new-plant-form">
      <h2>New Plant</h2>
      {/* STEP #__ (DELIV 2) */}
      <form onSubmit = {handleSubmit}>
        <input 
        type="text" 
        name="name" 
        placeholder="Plant name"
        value = {name}
        //STEP #5 (DELIV 2) --onChange
        onChange = {updateFormInfo}
         />
        <input 
        type="text" 
        name="image" 
        placeholder="Image URL"
        value = {image}
        onChange = {updateFormInfo} 
        />
        </form>
        </div>
        <picture>
            <img src= {moviePoster} />
            <img src= {moviePosterTwo} />
        </picture>
        </>
    )
}
