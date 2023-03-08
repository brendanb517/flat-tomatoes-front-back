import MovieCard from "./MovieCard";
import Slider from "react-slick";
import { useState } from "react";
 export default function MovieList ({ movies }) {
     const [featuredMovie, setFeaturedMovie] = useState({});
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      let featuredMovieComments = featuredMovie.comments?.map(comment => {
        return <li key={comment.id}>{comment.text}</li>
      })
    return (
        <div className="cards">
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
          </>
        </div>
    )}