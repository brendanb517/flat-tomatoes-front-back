import MovieCard from "./MovieCard";
import Slider from "react-slick";
import { useState } from "react";
import AddComment from "./AddComment";
 export default function MovieList ({ movies, user }) {
     const [featuredMovie, setFeaturedMovie] = useState({});
     const [idToDelete, setIdToDelete] = useState(null);

    function handleDelete(id) {
      console.log(id)
      fetch(`/comments/${id}`, {
      method: 'DELETE',
    });
    // setIdToDelete(id);
    }

    
     let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      let featuredMovieComments = featuredMovie.comments?.map(comment => {
        return <li key={comment.id}>{comment.text}
        <button onClick={() => {
          handleDelete(comment.id)
        }}>Delete</button>
        </li>
      })
    return (
        // <div className="cards">
            <>
            <Slider {...settings}>
                {movies.map(movie => {
                return <MovieCard
                key={movie.id}
                movie={movie}
                setFeaturedMovie={setFeaturedMovie}
                />
                    })
                }
          </Slider>
          <div className="featuredMovie">
            <img src={featuredMovie.poster} />
            <ul>
                {featuredMovieComments}
            </ul>
          </div>
          <AddComment user={user.id} featuredMovie={featuredMovie.id} idToDelete={idToDelete} />
          </>
        // </div>
    )}