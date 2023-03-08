import { useEffect} from "react";
import AddMovie from "./AddMovie";
import "./Movies.css";
import AddComment from "./AddComment";
// import MovieCard from "./MovieCard";

export default function Movies () {
    // const [movieList, setMovieList] = useState({});


useEffect( () => {
    fetch('http://127.0.0.1:3000/movies')
    .then(res=>res.json())
    .then(movieData => console.log(movieData))
},[])



// const movieCardsComponents = movieList.map((movie => {
//     return <MovieCard
//     key={movie.id}
//     movie={movie} />
// }))
    
 

    return (
        <>
       <h1>Flat Tomatoes's Featured Movies</h1>
       
    {/* <ul className="cards">
      {movieCardsComponents}
      </ul> */}

        
        <div>
            <picture className="featuredImage">
                <img src="https://m.media-amazon.com/images/M/MV5BMTM5MDY5MDQyOV5BMl5BanBnXkFtZTgwMzM3NzMxMDE@._V1_SX300.jpg" alt="movie img"/>
            </picture>
                
                <h3>COMMENTS</h3>
                <ul>
                    <li>@ellazondo: "This is THE clult classic!"</li>
                    <li>@iamdorito: "I couldn't take my eyes off the screen!"</li>
                    <li>@aura: "I got dragged to a showing, and loved every minute of it!"</li>
                </ul>
                </div>
                
        <AddComment />
        <AddMovie />
        </>
    )
}



        
