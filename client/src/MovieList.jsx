import MovieCard from "./MovieCard";
import Slider from "react-slick";


 export default function MovieList ({ movies }) {
    //products is passed as a prop. so far we can access each product as an object.

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return (
    
        <div className="cards">
            <Slider {...settings}>
                {movies.map(movie => {
                return <MovieCard key={movie.id} movie={movie}/>
                    })
                }
          </Slider>
          
        </div>
        
    
   
    )}

   