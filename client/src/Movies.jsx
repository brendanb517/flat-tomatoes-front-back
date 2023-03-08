import { useEffect,useState } from "react";
import AddMovie from "./AddMovie";
import AddComment from "./AddComment";
import MovieList from "./MovieList";
import "./Movies.scss";

export default function Movies () {
    const [movies, setMovies] = useState([]);


useEffect( () => {
    fetch('http://127.0.0.1:3000/movies')
    .then(res=>res.json())
    .then(movieData => setMovies(movieData))
},[])

    return (
        <>
       <h1>Flat Tomatoes's Featured Movies</h1>
        <MovieList movies = {movies} />
                
        <AddComment />
        <AddMovie />
        </>
    )
}



        
